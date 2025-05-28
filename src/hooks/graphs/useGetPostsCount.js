import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetPostsCount = () => {
  const { useGetData } = useQueryApi(endpoint.GRAPH.POSTS_COUNT);

  return useGetData({}, { staleTime: 3000 });
};

export default useGetPostsCount;
