import styles from "@/styles/LoginForm.module.css";
import { use, useState } from "react";
import Countdown from "react-countdown";
import { useEffect } from "react";

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let res = ["3", "95", "69", "7"];
  const [tries, setTries] = useState(res);
  const [numberOfTries, setNumberOfTries] = useState(5);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.textContent === tries[0]) {
      setTries(tries.slice(1));
    } else {
      setTries(res);
      setNumberOfTries(numberOfTries - 1);
    }
  };

  useEffect(() => {
    if (tries.length === 0) {
      alert("From Satoshi: you are worthy of my fortune, 9895");
    }
    if (numberOfTries === 0) {
      alert("From Satoshi: you are not worthy of my fortune.");
    }
  }, [tries]);

  function renderInputs() {
    const inputs = [];
    for (let i = 0; i < 104; i++) {
      inputs.push(
        <div key={i} className={styles.card} onClick={handleClick}>
          {i}
        </div>,
      );
    }
    return inputs;
  }

  return (
    <div>
      <div className={styles.warning}>You have {numberOfTries} tries left</div>
      <div className={styles.title}>"Inspect the Shadow"</div>
      <div>
        <div className={styles.grid}>{renderInputs()}</div>
      </div>
    </div>
  );
}

export default LoginForm;
