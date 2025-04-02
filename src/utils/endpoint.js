const endpoint = {
  AUTH: {
    LOGIN: "/v1/admin/login",
    LOGOUT: "/v1/admin/logout",
  },
  PROFILE: {
    ADMIN_INFO: "/v1/users/get-user-info",
    CHANGE_AVATAR: "/v1/users/change-avatar",
    CHANGE_PASSWORD: "/v1/users/change-password",
    CHANGE_NAME: "/v1/users/update-user-info",
  },
  STATISTICS: {
    GET_STATISTICS: "/v1/admin/statistics",
  },
  DOCTOR: {
    CREATE_DOCTOR: "/v1/admin/create-doctor",
    UPDATE_DOCTOR: "/v1/admin/update-doctor",
    GET_DOCTOR: "/v1/admin/get-doctors",
    DELETE_DOCTOR: "/v1/admin/delete-user",
  },
  BLOG: {
    GET_BLOGS: "/v1/blogs/get-all-blogs",
    UPDATE_STATUS: "/v1/blogs/update-status",
  },
  COMMUNITIES: {
    GET_COMMUNITIES: "/v1/communities/get-all-communities",
    DELETE_COMMUNITIY: "/v1/communities/delete-community",
    CREATE_COMMUNITY: "/v1/communities/create-community",
    UPDATE_COMMUNITY: "/v1/communities/edit-community",
    GET_COMMUNITY_MEMBERS: "/v1/communities/get-community-members",
    KICK_MEMBER: "/v1/communities/leave-member",
  },
};

export default endpoint;
