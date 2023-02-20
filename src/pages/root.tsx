import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { syncLogin } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { setAuthHeader } from "../util/httpClient";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(user).length !== 0) {
      dispatch(syncLogin(user));
      setAuthHeader(user.accessToken)
    }
  }, []);
  
  return <Outlet />;
};

export default RootLayout;
