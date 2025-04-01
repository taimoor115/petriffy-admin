import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetBlogs = (queryParams = {}) => {
  const filteredQueryParams = {
    page: queryParams.page,
    ...(queryParams.search ? { search: queryParams.search } : {}),
  };
  const { useGetData } = useQueryApi(endpoint.BLOG.GET_BLOGS);

  return useGetData(filteredQueryParams, { staleTime: 3600000 });
};

export default useGetBlogs;
