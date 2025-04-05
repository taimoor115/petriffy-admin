import useLogin from "./auth/useLogin";
import useLogout from "./auth/useLogout";
import useGetAdminInfo from "./profile/useGetAdminInfo";
import useChangeAvatar from "./profile/useChangeAvatar";
import useChangeName from "./profile/useChangeName";
import useChangePassword from "./profile/useChangePassword";
import useGetStatistics from "./statistics/useGetStatistics";
import useGetDoctors from "./doctors/useGetDoctors";
import useDebounce from "./utils/useDebounce";
import useRegisterDoctor from "./doctors/useRegisterDoctor";
import useUpdateDoctor from "./doctors/useUpdateDoctor";
import useDeleteUser from "./doctors/useDeleteDoctor";
import useGetBlogs from "./blogs/useGetBlogs";
import useUpdateStatus from "./blogs/useUpdateStatus";
import useGetCommunities from "./community/useGetCommunities";
import useUpdateCommunity from "./community/useUpdateCommunity";
import useDeleteCommunity from "./community/useDeleteCommunity";
import useGetMembers from "./community/useGetMembers";
import useKickMember from "./community/useKickMember";
import useGetPosts from "./posts/useGetPosts";
import useDeletePost from "./posts/useDeletePost";
export {
  useLogin,
  useLogout,
  useGetAdminInfo,
  useChangeAvatar,
  useChangeName,
  useChangePassword,
  useGetStatistics,
  useGetDoctors,
  useDebounce,
  useRegisterDoctor,
  useDeleteUser,
  useUpdateDoctor,
  useGetBlogs,
  useUpdateStatus,
  useGetCommunities,
  useUpdateCommunity,
  useDeleteCommunity,
  useGetMembers,
  useKickMember,
  useDeletePost,
  useGetPosts
};
