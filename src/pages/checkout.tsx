import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CheckOutSeatPlan from "../components/checkout/checkout-seat-plan";
import CheckOutSideBar from "../components/checkout/checkout-sidebar";
import { getBookingAction } from "../redux/bookingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const StyledCheckOut = styled.div`
  display: flex;
  over-flow: hidden;
`;
const CheckOut = () => {
  const { showId } = useParams();
  const dispatch = useAppDispatch();
  const { booking: { loading }} = useAppSelector(state => state)

  useEffect(() => {
    if(!showId) return;
    dispatch(getBookingAction(+showId));
  }, [showId]);
  
  if(loading) return <div>Loading...</div>
  return (
    <StyledCheckOut>
      <CheckOutSeatPlan />
      <CheckOutSideBar />
    </StyledCheckOut>
  );
};

export default CheckOut;
