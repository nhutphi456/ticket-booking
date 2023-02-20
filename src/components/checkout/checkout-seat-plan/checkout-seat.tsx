import { message } from "antd";
import React from "react";
import { addSeat, removeSeat } from "../../../redux/bookingSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import * as Styled from "./styled";

interface Props {
  rowName: string;
  rowOrder: number;
  seat: any;
}
const NUMBER_OF_SEATS_PER_ROW = 16;
const SEAT_LIMIT = 10;
const Seat = ({ rowName, rowOrder, seat }: Props) => {
  const dispatch = useAppDispatch();
  const {
    booking: { selectedSeatIds },
  } = useAppSelector((state) => state);
  const displaySeatId = `${rowName}${
    +seat.tenGhe - NUMBER_OF_SEATS_PER_ROW * rowOrder
  }`;

  const handleSelectSeat = () => {
    if (seat.daDat) return;
    if (
      selectedSeatIds.length === SEAT_LIMIT &&
      !selectedSeatIds.includes(seat.maGhe)
    ) {
      message.destroy();
      return message.warning(`Bạn không thể chọn quá ${SEAT_LIMIT} ghế`);
    }
    const formattedSeat = { ...seat, displaySeatId };
    console.log("seat", seat);
    if (selectedSeatIds.includes(seat.maGhe)) {
      dispatch(removeSeat(formattedSeat));
      return;
    }
    dispatch(addSeat(formattedSeat));
  };

  return (
    <Styled.Seat onClick={handleSelectSeat}>
      {seat.daDat ? (
        <img
          className="seat booked"
          src={process.env.PUBLIC_URL + "/images/seat-booked.png"}
          alt="seat-booked"
        />
      ) : selectedSeatIds.includes(seat.maGhe) ? (
        <>
          <img
            className="seat"
            src={process.env.PUBLIC_URL + "/images/seat-booking.png"}
            alt="seat-booking"
          />
          <span className="seat-name">{displaySeatId}</span>
        </>
      ) : (
        <img
          className="seat"
          src={process.env.PUBLIC_URL + "/images/seat-available.png"}
          alt="seat-available"
        />
      )}
    </Styled.Seat>
  );
};

export default Seat;
