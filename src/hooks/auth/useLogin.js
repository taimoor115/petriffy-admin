import { toast } from "sonner";
import { useAuth } from "../../context/auth";
import endpoint from "../../utils/endpoint";
import useQueryApi from "../api/useQuery";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const { usePostData } = useQueryApi(endpoint.AUTH.LOGIN, { useToken: false });
  const { login } = useAuth();
  const loginMutation = usePostData({
    onSuccess: (data) => {
      login(data.data?.accessToken);
      toast.success(`Welcome ${data.data.name}!`);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};

export default useLogin;
