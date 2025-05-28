import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetUsersCount = () => {
  const { useGetData } = useQueryApi(endpoint.GRAPH.USER_COUNT);

  return useGetData({}, { staleTime: 3000 });
};

export default useGetUsersCount;
