import moment from "moment";
import React from "react";
import * as Styled from "./styled";

interface Props {
  showTime: any;
}
const ShowTimeButton = ({ showTime }: Props) => {
  const { ngayChieuGioChieu, maLichChieu } = showTime;
  const onSelectShowTime = () => {
    console.log(maLichChieu);
  };
  return (
    <Styled.ShowTimeButton onClick={onSelectShowTime}>
      <span className="start-time">
        {moment(ngayChieuGioChieu).format("HH:mm")}
      </span>
      <span className="end-time">
        {" "}
        ~ {moment(ngayChieuGioChieu).add(120, "minutes").format("HH:mm")}
      </span>
    </Styled.ShowTimeButton>
  );
};

export default ShowTimeButton;
