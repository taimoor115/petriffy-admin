import { toast } from "sonner";
import endpoint from "../utils/endpoint";
import useQueryApi from "./useQuery";

const useChangePassword = () => {
  const { usePatchData } = useQueryApi(endpoint.PROFILE.CHANGE_PASSWORD);
  const changePasswordMutation = usePatchData({
    onSuccess: () => {
      toast.success("Password updated successfully");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    changePassword: changePasswordMutation.mutateAsync,
    isLoading: changePasswordMutation.isPending,
    error: changePasswordMutation.error,
  };
};

export default useChangePassword;
