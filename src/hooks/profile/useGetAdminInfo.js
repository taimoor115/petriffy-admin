import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetAdminInfo = () => {
  const { useGetData } = useQueryApi(endpoint.PROFILE.ADMIN_INFO);

  return useGetData({}, { staleTime: 3600000 });
};

export default useGetAdminInfo;
