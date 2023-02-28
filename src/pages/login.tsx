import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/form/account/login";
import AccountLayout from "../layouts/account-layout";
import { useAppSelector } from "../redux/hooks";

const LoginPage = () => {
  const {
    auth: { isAuthenticated },
  } = useAppSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  
  return (
    <AccountLayout>
      <LoginForm />
    </AccountLayout>
  );
};

export default LoginPage;
