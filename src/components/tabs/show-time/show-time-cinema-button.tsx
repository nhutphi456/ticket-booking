import moment from "moment";
import React from "react";
import * as Styled from "./styled";

interface Props {
  time: string;
}
const ShowTimeButton = ({ time }: Props) => {
  return (
    <Styled.ShowTimeButton>
      <span className="start-time">{moment(time).format("HH:mm")}</span>
      <span className="end-time">
        {" "}
        ~ {moment(time).add(120, "minutes").format("HH:mm")}
      </span>
    </Styled.ShowTimeButton>
  );
};

export default ShowTimeButton;
