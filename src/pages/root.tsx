import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { syncLogin } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(user).length !== 0) {
      dispatch(syncLogin(user));
    }
  }, []);
  
  return <Outlet />;
};

export default RootLayout;
