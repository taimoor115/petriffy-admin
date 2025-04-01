import endpoint from "../../utils/endpoint";
import { updateAllQueryCache } from "../../utils/getter-setter";
import useQueryApi from "../api/useQuery";

const useUpdateDoctor = (id) => {
  const ENDPOINT = `${endpoint.DOCTOR.UPDATE_DOCTOR}/${id}`;
  const { usePatchData } = useQueryApi(ENDPOINT);
  const updateDoctorMutation = usePatchData({
    onSuccess: (_, variables) => {
      updateAllQueryCache(endpoint.DOCTOR.GET_DOCTOR, (oldData) => {
        return {
          ...oldData,
          data: {
            ...oldData.data,
            data: oldData.data.data.map((item) =>
              item._id === id ? { ...item, ...variables.body } : item
            ),
          },
        };
      });
    },

    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    updateDoctor: updateDoctorMutation.mutateAsync,
    isLoading: updateDoctorMutation.isPending,
    error: updateDoctorMutation.error,
  };
};

export default useUpdateDoctor;
