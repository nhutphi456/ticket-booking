import { Button } from "antd";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

const HeaderAfterLogin = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const { logout } = useAuth();

  return (
    <React.Fragment>
      <div className="welcome-text">
        Hi, <Link to={`/account/${user.taiKhoan}`} className="username">{user.hoTen}</Link>
      </div>
      <div>
        <Button onClick={logout}>Logout</Button>
      </div>
    </React.Fragment>
  );
};

export default HeaderAfterLogin;
