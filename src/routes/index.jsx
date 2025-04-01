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
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/doctors", element: <Doctors /> },
  {
    path: "/communities",
    element: <Community />,
  },
  { path: "/blogs", element: <Blogs /> },
  { path: "/posts", element: <Posts /> },
  { path: "/users", element: <Users /> },
  { path: "/communities/:communityId", element: <CommunityDetail /> },
  { path: "/blog-detail", element: <BlogDetail /> },
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
