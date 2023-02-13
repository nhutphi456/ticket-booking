import React, { useEffect, useState } from "react";
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
  return <Styled.SeatPlanHeader>{user && user.taiKhoan}</Styled.SeatPlanHeader>;
};

export default CheckoutSeatPlanHeader;
