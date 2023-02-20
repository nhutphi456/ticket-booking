import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styled";

interface Props {
  showTime: any;
}
const ShowTimeButton = ({ showTime }: Props) => {
  const { ngayChieuGioChieu, maLichChieu } = showTime;
  return (
    <Link to={`/checkout/${maLichChieu}`}>
      <Styled.ShowTimeButton>
        <span className="start-time">
          {moment(ngayChieuGioChieu).format("HH:mm")}
        </span>
        <span className="end-time">
          {" "}
          ~ {moment(ngayChieuGioChieu).add(120, "minutes").format("HH:mm")}
        </span>
      </Styled.ShowTimeButton>
    </Link>
  );
};

export default ShowTimeButton;
