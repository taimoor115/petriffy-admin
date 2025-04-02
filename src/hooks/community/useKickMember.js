import { toast } from "sonner";
import endpoint from "../../utils/endpoint";
import { updateAllQueryCache } from "../../utils/getter-setter";
import useQueryApi from "../api/useQuery";
import { invalidateQuery } from "../../utils/invalidator-cache";

const useKickMember = () => {
  const ENDPOINT = `${endpoint.COMMUNITIES.KICK_MEMBER}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const kickMember = usePatchData({
    onSuccess: (_, variables) => {
      invalidateQuery(endpoint.COMMUNITIES.GET_COMMUNITY_MEMBERS);
      updateAllQueryCache(
        `${endpoint.COMMUNITIES.GET_COMMUNITY_MEMBERS}/${variables.body?.communityId}`,
        (oldData) => {
          return {
            ...oldData,
            data: {
              ...oldData.data,
              data: oldData.data.data?.data?.filter(
                (item) => item.memberId !== variables.body?.userId
              ),
            },
          };
        }
      );
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    kickMember: (body) => kickMember.mutateAsync(body),
    isLoading: kickMember.isPending,
    error: kickMember.error,
  };
};

export default useKickMember;
