import endpoint from "../utils/endpoint";
import { updateQueryCacheData } from "../utils/getter-setter";
import useQueryApi from "./useQuery";

const useChangeName = () => {
  const { usePatchData } = useQueryApi(endpoint.PROFILE.CHANGE_NAME);
  const changeNameMutation = usePatchData({
    onSuccess: (_, variables) => {
      updateQueryCacheData(endpoint.PROFILE.ADMIN_INFO, (oldData) => {
        return {
          ...oldData,
          data: { ...oldData.data, name: variables.body.name },
        };
      });
    },
  });

  return {
    changeName: changeNameMutation.mutate,
    isLoading: changeNameMutation.isPending,
    error: changeNameMutation.error,
  };
};

export default useChangeName;
