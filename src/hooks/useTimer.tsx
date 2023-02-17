import { useEffect, useState } from "react";

const useTimer = (minutes: number) => {
  const [isExpired, setIsExpired] = useState(false);
  const [[mins, seconds], setTime] = useState([minutes, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);

    return () => clearInterval(interval);
  });

  const countDown = () => {
    if (mins === 0 && seconds === 0) {
      setTime([0, 0]);
      setIsExpired(true);
    } else if (seconds === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, seconds - 1]);
    }
  };

  return {
    mins,
    seconds,
    isExpired,
  };
};

export { useTimer };
