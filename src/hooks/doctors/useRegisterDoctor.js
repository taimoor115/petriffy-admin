import endpoint from "../../utils/endpoint";
import { updateQueryCacheData } from "../../utils/getter-setter";
import useQueryApi from "../api/useQuery";

const useChangeAvatar = () => {
  const { usePostData } = useQueryApi(endpoint.PROFILE.CHANGE_AVATAR);
  const changeAvatarMutation = usePostData({
    onSuccess: (data) => {
      updateQueryCacheData(endpoint.PROFILE.ADMIN_INFO, (oldData) => {
        return {
          ...oldData,
          data: { ...oldData.data, avatar: data.data.url },
        };
      });
    },
  });

  return {
    changeAvatar: changeAvatarMutation.mutate,
    isLoading: changeAvatarMutation.isPending,
    error: changeAvatarMutation.error,
  };
};

export default useChangeAvatar;
