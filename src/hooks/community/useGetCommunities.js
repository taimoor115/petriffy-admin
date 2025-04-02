import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetCommunities = (queryParams = {}) => {
  const filteredQueryParams = {
    page: queryParams.page,
    ...(queryParams.search ? { search: queryParams.search } : {}),
  };
  const { useGetData } = useQueryApi(endpoint.COMMUNITIES.GET_COMMUNITIES);

  return useGetData(filteredQueryParams, { staleTime: 30 * 1000 });
};

export default useGetCommunities;
