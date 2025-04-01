import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useDeleteUser = () => {
  const ENDPOINT = `${endpoint.DOCTOR.DELETE_DOCTOR}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const deleteDoctorMutation = usePatchData({
    onSuccess: () => {
      invalidateQuery(endpoint.DOCTOR.GET_DOCTOR);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    deleteDoctor: (id) => deleteDoctorMutation.mutateAsync({ id }),
    isLoading: deleteDoctorMutation.isPending,
    error: deleteDoctorMutation.error,
  };
};

export default useDeleteUser;
