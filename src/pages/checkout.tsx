import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CheckoutFooterMobile from "../components/checkout/checkout-footer-mobile";
import CheckOutSeatPlan from "../components/checkout/checkout-seat-plan";
import CheckOutSideBar from "../components/checkout/checkout-sidebar";
import useMobile from "../hooks/useMobile";
import { getBookingAction, resetSeat } from "../redux/bookingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const StyledCheckOut = styled.div`
  display: flex;
  over-flow: hidden;
`;
const CheckOut = () => {
  const isMobile = useMobile();
  const { showId } = useParams();
  const dispatch = useAppDispatch();
  const {
    booking: { loading },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!showId) return;
    dispatch(getBookingAction(+showId));

    return () => {
      dispatch(resetSeat());
    };
  }, [showId]);

  if (loading) return <div>Loading...</div>;
  return (
    <StyledCheckOut>
      <CheckOutSeatPlan />
      <CheckOutSideBar />
      {isMobile && <CheckoutFooterMobile />}
    </StyledCheckOut>
  );
};

export default CheckOut;
