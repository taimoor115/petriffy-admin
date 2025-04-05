import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetPosts = (queryParams = {}) => {
    const filteredQueryParams = {
        page: queryParams.page,
        ...(queryParams.search ? { search: queryParams.search } : {}),
    };
    const { useGetData } = useQueryApi(endpoint.POSTS.GET_POSTS);

    return useGetData(filteredQueryParams, { staleTime: 3600000 });
};

export default useGetPosts;
