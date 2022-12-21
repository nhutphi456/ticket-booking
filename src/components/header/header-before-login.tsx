import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderBeforeLogin = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button>Join us</Button>
    </React.Fragment>
  );
};

export default HeaderBeforeLogin;
