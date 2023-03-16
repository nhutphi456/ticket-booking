import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const RequireAuth = () => {
  const {
    auth: { isAuthenticated },
  } = useAppSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isLoggedInBefore = Object.keys(user).length !== 0 ? true : false;
  const isLoggedIn = isLoggedInBefore || isAuthenticated;
  const location = useLocation().pathname;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />;
};

export default RequireAuth;
