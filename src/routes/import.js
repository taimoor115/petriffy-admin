import { lazy } from "react";

export const Login = lazy(() => import("../pages/auth/login"));
export const Home = lazy(() => import("../pages/home"));
export const ClientError = lazy(() => import("../pages/error/client-error"));
export const Doctors = lazy(() => import("../pages/doctor"));
export const Blogs = lazy(() => import("../pages/blogs"));
export const Users = lazy(() => import("../pages/users"));
export const Community = lazy(() => import("../pages/community"));
export const CommunityDetail = lazy(() => import("../pages/community-detail"));
export const Posts = lazy(() => import("../pages/posts"));
export const Profile = lazy(() => import("../pages/profile"));
export const NotFound = lazy(() => import("../pages/error/not-found"));
