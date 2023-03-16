import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { syncLogin } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { setAuthHeader } from "../util/httpClient";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const { logout } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(user).length !== 0) {
      dispatch(syncLogin(user));
      setAuthHeader(user.accessToken);
    }
  }, [dispatch]);

  useEffect(() => {
    const syncLogout = (e: any) => {
      if (e.key === "logout") {
        logout();
      }
    };

    window.addEventListener("storage", syncLogout);

    return () => window.removeEventListener("storage", syncLogout);
  }, [logout]);

  return <Outlet />;
};

export default RootLayout;
