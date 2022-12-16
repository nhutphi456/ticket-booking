import React, {useState} from "react";
import { Button } from "antd";
import LoginModal from "../modals/login";

const HeaderBeforeLogin = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleCloseLoginModal = () => {
    setIsLoginOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={() => setIsLoginOpen(true)}>Login</Button>
      <Button>Join us</Button>
      <LoginModal isOpen={isLoginOpen} onCancel={handleCloseLoginModal} />
    </React.Fragment>
  );
};

export default HeaderBeforeLogin;
