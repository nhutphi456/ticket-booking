import { message } from "antd";
import { useCallback } from "react";
import { ILoginUser } from "../models/user";
import { loginAction, logoutAction } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { authApi } from "../services/auth";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const login = useCallback(async (values: ILoginUser) => {
    dispatch(loginAction(values))
      .then((res) => {
        console.log("resss", res);
      })
      .catch((err) => console.log("err", err));
  }, []);
  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return { login, logout };
};

export default useAuth;
