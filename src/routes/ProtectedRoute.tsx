import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProtectedRoute = ({ role }: { role: "admin" | "user" }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user role", user?.role);
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
