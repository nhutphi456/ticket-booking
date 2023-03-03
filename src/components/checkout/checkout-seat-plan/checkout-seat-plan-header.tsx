import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import * as Styled from "./styled";

const CheckoutSeatPlanHeader = () => {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  // const [user, setUser] = useState()

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user') || '{}').taiKhoan
  //   setUser(user)
  // }, [])
  return (
    <Styled.SeatPlanHeader>
      <div className="logo-container">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        </Link>
      </div>
      <div className="profile">
        <Styled.ProfileImage
          bgUrl={process.env.PUBLIC_URL + "/images/profile-image.jpg"}
        />
        <span className="username">{user && user.taiKhoan}</span>
      </div>
    </Styled.SeatPlanHeader>
  );
};

export default CheckoutSeatPlanHeader;
