import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetStatistics = () => {
  const { useGetData } = useQueryApi(endpoint.STATISTICS.GET_STATISTICS);

  return useGetData({}, { staleTime: 1000 });
};

export default useGetStatistics;
