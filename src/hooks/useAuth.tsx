import { message } from "antd";
import { useCallback } from "react";
import { ILoginUser, ISingupUser } from "../models/user";
import { loginAction, logoutAction, signUpAction } from "../redux/authSlice";
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
        message.destroy();
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

  const signup = useCallback(
    async (values: ISingupUser) => {
      try {
        const { status } = await dispatch(signUpAction(values)).unwrap();
        if (status === 200) {
        }
      } catch (error: any) {
        message.destroy();
        message.error(error.response.data);
      }
    },
    [dispatch]
  );

  return { login, logout, signup };
};

export default useAuth;
