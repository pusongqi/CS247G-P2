import Countdown from "react-countdown";
import React from "react";

function Timer() {
  const Completionist = () => <span>You have disappointed me kid!</span>;

  return (
    <div>
      <h1>Timer</h1>
      <Countdown date={Date.now() + 3600000}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default Timer;
