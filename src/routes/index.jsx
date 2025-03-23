import { createBrowserRouter } from "react-router-dom";
import { ClientError, Login, NotFound } from "./import";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <ClientError />,
    public: true,
  },
  { path: "*", element: <NotFound />, errorElement: <ClientError /> },
]);

export default router;
