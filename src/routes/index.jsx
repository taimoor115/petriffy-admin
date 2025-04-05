import { createBrowserRouter } from "react-router-dom";
import {
  BlogDetail,
  Blogs,
  ClientError,
  Community,
  CommunityDetail,
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

const ProtectedRouteWrapper = ({ children }) => (
  <ProtectedRoute allowedRoles={["ADMIN"]}>{children}</ProtectedRoute>
);

const routes = [
  { path: "/", element: <Home />, allowedRoles: ["ADMIN"] },
  { path: "/profile", element: <Profile />, allowedRoles: ["ADMIN"] },
  { path: "/doctors", element: <Doctors />, allowedRoles: ["ADMIN"] },
  {
    path: "/communities",
    element: <Community />,
    allowedRoles: ["ADMIN"],
  },
  { path: "/blogs", element: <Blogs />, allowedRoles: ["ADMIN"] },
  { path: "/posts", element: <Posts />, allowedRoles: ["ADMIN"] },
  { path: "/users", element: <Users />, allowedRoles: ["ADMIN"] },
  {
    path: "/community-detail",
    element: <CommunityDetail />,
    allowedRoles: ["ADMIN"],
  },
  { path: "/blog-detail", element: <BlogDetail />, allowedRoles: ["ADMIN"] },
];

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
          <ProtectedRouteWrapper>
            <Home />
          </ProtectedRouteWrapper>
        ),
      },
      ...routes.map((route) => ({
        path: route.path,
        element: <ProtectedRouteWrapper>{route.element}</ProtectedRouteWrapper>,
      })),
    ],
  },
  { path: "*", element: <NotFound />, errorElement: <ClientError /> },
]);

export default router;
