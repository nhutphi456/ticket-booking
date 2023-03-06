import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderBeforeLogin = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button onClick={() => navigate("/signup")}>Join Us</Button>
    </React.Fragment>
  );
};

export default HeaderBeforeLogin;
