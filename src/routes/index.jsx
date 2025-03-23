import { createBrowserRouter } from "react-router-dom";
import { ClientError, Home, Login, NotFound } from "./import";
import { DefaultLayout } from "../components";
import ProtectedRoute from "../components/protected-route";

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
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ClientError /> },
]);

export default router;
