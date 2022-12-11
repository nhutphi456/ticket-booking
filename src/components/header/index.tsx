import { lazy, useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoginModal from "../modals/login";
import * as Styled from "./styled";

// const LoginModal = lazy(() => import('../modals/login'))
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { logout } = useAuth();
  const handleCloseLoginModal = () => {
    setIsLoginOpen(false);
  };
  return (
    <Styled.HeaderContainter>
      <Styled.LoginButton onClick={() => setIsLoginOpen(true)}>
        Login
      </Styled.LoginButton>
      <Styled.LoginButton onClick={() => logout()}>Logout</Styled.LoginButton>
      <LoginModal isOpen={isLoginOpen} onCancel={handleCloseLoginModal} />
    </Styled.HeaderContainter>
  );
};

export default Header;
