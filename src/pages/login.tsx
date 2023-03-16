import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/form/account/login";
import AccountLayout from "../layouts/account-layout";
import { useAppSelector } from "../redux/hooks";

const LoginPage = () => {
  const {
    auth: { isAuthenticated },
  } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if(location.state) {
        navigate(`${location.state.from}`)
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate, location]);
  
  return (
    <AccountLayout>
      <LoginForm />
    </AccountLayout>
  );
};

export default LoginPage;
