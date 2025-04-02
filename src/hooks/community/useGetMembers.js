import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetMembers = (id, queryParams = {}) => {
  const filteredQueryParams = {
    page: queryParams.page,
    ...(queryParams.search ? { search: queryParams.search } : {}),
  };
  const ENDPOINT = `${endpoint.COMMUNITIES.GET_COMMUNITY_MEMBERS}/${id}`;
  const { useGetData } = useQueryApi(ENDPOINT);

  return useGetData(filteredQueryParams, { staleTime: 30 * 1000 });
};

export default useGetMembers;
