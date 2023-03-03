import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CheckoutFooterMobile from "../components/checkout/checkout-footer-mobile";
import CheckOutSeatPlan from "../components/checkout/checkout-seat-plan";
import CheckOutSideBar from "../components/checkout/checkout-sidebar";
import Loading from "../components/loading";
import Layer from "../components/page-layer";
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

  if (loading) return <Loading />;
  return (
    <StyledCheckOut>
      <CheckOutSeatPlan />
      <CheckOutSideBar />
      {isMobile && <CheckoutFooterMobile />}
      <Layer/>
    </StyledCheckOut>
  );
};

export default CheckOut;
