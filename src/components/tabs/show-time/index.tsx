import React, { useEffect } from "react";
import useShowTime from "../../../hooks/useShowTime";

const ShowTime = () => {
  const { theaters } = useShowTime();

  return <div>ShowTime</div>;
};

export default ShowTime;
