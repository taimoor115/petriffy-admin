import endpoint from "../utils/endpoint";
import useQueryApi from "./useQuery";

const useChangeAvatar = () => {
  const { usePostData } = useQueryApi(endpoint.PROFILE.CHANGE_AVATAR);
};
