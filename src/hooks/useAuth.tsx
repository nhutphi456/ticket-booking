import { message } from "antd";
import { AxiosError } from "axios";
import { useCallback } from "react";
import { ILoginUser } from "../models/user";
import { loginAction, logoutAction } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { removeAuthHeader, setAuthHeader } from "../util/httpClient";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback(
    async (values: ILoginUser) => {
      try {
        const { data } = await dispatch(loginAction(values)).unwrap();
        if (data) {
          const { accessToken } = data;
          setAuthHeader(accessToken);
          localStorage.setItem("user", JSON.stringify(data));
        }
      } catch (error: any) {
        message.error(error.response.data);
      }
    },
    [dispatch]
  );
  
  const logout = useCallback(() => {
    dispatch(logoutAction());
    removeAuthHeader();
    localStorage.setItem("logout", Date.now().toString());
    localStorage.removeItem("user");
  }, [dispatch]);

  return { login, logout };
};

export default useAuth;
