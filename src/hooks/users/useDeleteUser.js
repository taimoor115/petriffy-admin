import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useDeleteUsers = () => {
    const ENDPOINT = `${endpoint.USERS.DELETE_USER}`;
    const { usePatchData } = useQueryApi(ENDPOINT);
    const deleteUser = usePatchData({
        onSuccess: () => {
            invalidateQuery(endpoint.USERS.GET_USERS);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    return {
        deleteUser: (id) => deleteUser.mutateAsync({ id }),
        isLoading: deleteUser.isPending,
        error: deleteUser.error,
    };
};

export default useDeleteUsers;
