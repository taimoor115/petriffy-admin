import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";

const useGetDoctors = (queryParams = {}) => {
  const filteredQueryParams = {
    page: queryParams.page,
    ...(queryParams.search ? { search: queryParams.search } : {}),
  };
  const { useGetData } = useQueryApi(endpoint.DOCTOR.GET_DOCTOR);

  return useGetData(filteredQueryParams, { staleTime: 3600000 });
};

export default useGetDoctors;
