import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  console.log(user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
