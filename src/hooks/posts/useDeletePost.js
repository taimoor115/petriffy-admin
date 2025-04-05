import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useDeletePost = () => {
    const ENDPOINT = `${endpoint.POSTS.DELETE_POST}`;
    const { usePatchData } = useQueryApi(ENDPOINT);
    const deletePost = usePatchData({
        onSuccess: () => {
            invalidateQuery(endpoint.POSTS.GET_POSTS);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    return {
        deletePost: (id) => deletePost.mutateAsync({ id }),
        isLoading: deletePost.isPending,
        error: deletePost.error,
    };
};

export default useDeletePost;
