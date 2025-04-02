import { toast } from "sonner";
import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useCreateCommunity = () => {
  const { usePostData } = useQueryApi(endpoint.COMMUNITIES.CREATE_COMMUNITY);
  const createCommunity = usePostData({
    onSuccess: () => {
      invalidateQuery(endpoint.COMMUNITIES.GET_COMMUNITIES);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    createCommunity: createCommunity.mutateAsync,
    isLoading: createCommunity.isPending,
    error: createCommunity.error,
  };
};

export default useCreateCommunity;
