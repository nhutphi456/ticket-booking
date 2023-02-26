import moment from "moment";
import React from "react";
import { StyledTicketButton } from "./styled";

interface Props {
  ngayChieuGioChieu: string;
}
const TicketButton = ({ ngayChieuGioChieu }: Props) => {
  return (
    <StyledTicketButton>
      <span className="start-time">
        {moment(ngayChieuGioChieu).format("HH:mm")}
      </span>
      <span className="end-time">
        {" "}
        ~ {moment(ngayChieuGioChieu).add(120, "minutes").format("HH:mm")}
      </span>
    </StyledTicketButton>
  );
};

export default TicketButton;
