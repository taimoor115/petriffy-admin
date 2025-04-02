import { toast } from "sonner";
import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useUpdateStatus = () => {
  const ENDPOINT = `${endpoint.BLOG.UPDATE_STATUS}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const updateBlogStatus = usePatchData({
    onSuccess: () => {
      invalidateQuery(endpoint.BLOG.GET_BLOGS);
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    updateStatus: (id, body) => updateBlogStatus.mutateAsync(id, body),
    isLoading: updateBlogStatus.isPending,
    error: updateBlogStatus.error,
  };
};

export default useUpdateStatus;
