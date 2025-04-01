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
};

export default endpoint;
