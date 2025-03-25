import { createBrowserRouter } from "react-router-dom";
import { ClientError, Home, Login, NotFound, Profile } from "./import";
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
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ClientError /> },
]);

export default router;
