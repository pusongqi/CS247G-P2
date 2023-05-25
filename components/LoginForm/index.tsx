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
      alert("From Satoshi: you are worthy of my fortune, the key is 9895");
    }
    if (numberOfTries === 0) {
      alert(
        "From Satoshi: you have let me down. I will not bestow my fortune upon you.",
      );
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
      <br></br>
      <div className={styles.journal}>
        "When I was a student at Stanford, my first ever internship was frontend
        development. For a whole summer, I worked with HTML and CSS sytle
        sheets. It was facinating to see infomation getting distributed to
        people's computers through the internet and how each person could
        inspect the elements and values on their own browsers. HTML has a
        specific structure, I took inspiration of that when I deisnged the
        blockchain so that each block of blockchain has a header that contains
        the most important infomation and a body that contains the
        transactions..."
      </div>
      <br></br>
      <div>
        <div className={styles.grid}>{renderInputs()}</div>
      </div>
    </div>
  );
}

export default LoginForm;
