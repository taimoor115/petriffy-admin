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
};

export default endpoint;
