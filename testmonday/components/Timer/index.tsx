import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Timer() {
  const calculateRemainingSeconds = () => {
    const storedEndTime = localStorage.getItem("timerEndTime");
    if (storedEndTime) {
      const remainingSeconds = Math.floor(
        (new Date(storedEndTime).getTime() - new Date().getTime()) / 1000,
      );
      return remainingSeconds > 0 ? remainingSeconds : 0;
    } else {
      const endTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("timerEndTime", new Date(endTime).toISOString());
      return 60 * 60;
    }
  };

  const [seconds, setSeconds] = useState(calculateRemainingSeconds); // 1 hour in seconds

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      {" "}
      <h1>1 Hour Countdown Timer</h1>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}

export default Timer;
