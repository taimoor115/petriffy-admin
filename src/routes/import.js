import { lazy } from "react";

export const Login = lazy(() => import("../pages/auth/login"));
export const ClientError = lazy(() => import("../pages/error/client-error"));
export const NotFound = lazy(() => import("../pages/error/not-found"));
