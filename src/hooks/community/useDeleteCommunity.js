import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useDeleteCommunity = () => {
  const ENDPOINT = `${endpoint.COMMUNITIES.DELETE_COMMUNITIY}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const deleteCommunity = usePatchData({
    onSuccess: () => {
      invalidateQuery(endpoint.COMMUNITIES.GET_COMMUNITIES);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    deleteCommunity: (id) => deleteCommunity.mutateAsync({ id }),
    isLoading: deleteCommunity.isPending,
    error: deleteCommunity.error,
  };
};

export default useDeleteCommunity;
