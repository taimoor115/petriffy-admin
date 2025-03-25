import { createBrowserRouter } from "react-router-dom";
import {
  Blogs,
  ClientError,
  Community,
  Doctors,
  Home,
  Login,
  NotFound,
  Posts,
  Profile,
  Users,
} from "./import";
import { DefaultLayout } from "../layout/index";
import { ProtectedRoute } from "../components";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <ClientError />,
    public: true,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ClientError />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/doctors",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Doctors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/communities",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Community />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Blogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Posts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <Users />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ClientError /> },
]);

export default router;
