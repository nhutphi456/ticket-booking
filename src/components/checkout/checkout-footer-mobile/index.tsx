import { Button } from "antd";
import React, { useState } from "react";
import useBooking from "../../../hooks/useBooking";
import { useAppSelector } from "../../../redux/hooks";
import BookingSuccessModal from "../../modals/booking-success";
import CheckoutDrawer from "./checkout-drawer";
import * as Styled from "./styled";

const CheckoutFooterMobile = () => {
  const {
    booking: { displaySelectedSeats },
  } = useAppSelector((state) => state);
  const [open, setOpen] = useState(false);
  const { onFinishBooking, isSuccessful } = useBooking();
  const showCheckoutDrawer = () => {
    if (displaySelectedSeats.length === 0) return;
    setOpen(true);
  };

  return (
    <Styled.CheckoutFooterMobile
      style={{
        display: isSuccessful ? "none" : "flex",
      }}
    >
      <div className="seats-container">
        <div className="selected-seats">
          {displaySelectedSeats.map((seat, index: number) => {
            return (
              <span className="seat-item" key={index}>
                {seat}
              </span>
            );
          })}
        </div>
      </div>
      <div className="footer-btn">
        {open ? (
          <Button onClick={onFinishBooking}>Đặt vé</Button>
        ) : (
          <Button
            disabled={displaySelectedSeats.length === 0}
            onClick={showCheckoutDrawer}
          >
            Tiếp tục
          </Button>
        )}
      </div>
      <CheckoutDrawer
        open={open}
        contentWrapperStyle={{ width: "100%" }}
        onClose={() => setOpen(false)}
        title={"Hoàn tất đặt vé"}
      />
      <BookingSuccessModal isOpen={isSuccessful} />
    </Styled.CheckoutFooterMobile>
  );
};

export default CheckoutFooterMobile;
