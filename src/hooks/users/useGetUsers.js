import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetUsers = (queryParams = {}) => {
    const filteredQueryParams = {
        page: queryParams.page,
        ...(queryParams.search ? { search: queryParams.search } : {}),
    };
    const { useGetData } = useQueryApi(endpoint.USERS.GET_USERS);

    return useGetData(filteredQueryParams, { staleTime: 3600000 });
};

export default useGetUsers;
