import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CheckOutSeatPlan from "../components/checkout/checkout-seat-plan";
import CheckOutSideBar from "../components/checkout/checkout-sidebar";
import { getBookingAction } from "../redux/bookingSlice";
import { useAppDispatch } from "../redux/hooks";

const StyledCheckOut = styled.div`
  display: flex;
`;
const CheckOut = () => {
  const { showId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!showId) return;
    dispatch(getBookingAction(+showId));
  }, [showId]);
  
  return (
    <StyledCheckOut>
      <CheckOutSeatPlan />
      <CheckOutSideBar />
    </StyledCheckOut>
  );
};

export default CheckOut;
