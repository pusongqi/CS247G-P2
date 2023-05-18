import Countdown from "react-countdown";
import styles from "@/styles/Timer.module.css";

function Timer() {
  const Completionist = () => <span>You have disappointed me kid!</span>;
  return (
    <div className={styles.timer}>
      <Countdown date={Date.now() + 600000}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default Timer;
