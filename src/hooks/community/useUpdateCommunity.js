import endpoint from "../../utils/endpoint";
import { updateAllQueryCache } from "../../utils/getter-setter";
import useQueryApi from "../api/useQuery";

const useUpdateCommunity = () => {
  const ENDPOINT = `${endpoint.COMMUNITIES.UPDATE_COMMUNITY}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const updateCommunity = usePatchData({
    onSuccess: (_, variables) => {
      updateAllQueryCache(endpoint.COMMUNITIES.GET_COMMUNITIES, (oldData) => {
        return {
          ...oldData,
          data: {
            ...oldData.data,
            data: oldData.data.data.map((item) =>
              item._id === variables.id ? { ...item, ...variables.body } : item
            ),
          },
        };
      });
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    updateCommunity: (id, body) => updateCommunity.mutateAsync(id, body),
    isLoading: updateCommunity.isPending,
    error: updateCommunity.error,
  };
};

export default useUpdateCommunity;
