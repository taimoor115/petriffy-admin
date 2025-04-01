import { toast } from "sonner";
import endpoint from "../../utils/endpoint";
import { invalidateQuery } from "../../utils/invalidator-cache";
import useQueryApi from "../api/useQuery";

const useRegisterDoctor = () => {
  const { usePostData } = useQueryApi(endpoint.DOCTOR.CREATE_DOCTOR);
  const createDoctor = usePostData({
    onSuccess: () => {
      invalidateQuery(endpoint.DOCTOR.GET_DOCTOR);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    createDoctor: createDoctor.mutateAsync,
    isLoading: createDoctor.isPending,
    error: createDoctor.error,
  };
};

export default useRegisterDoctor;
