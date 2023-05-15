import styles from "@/styles/LoginForm.module.css";
import { useState } from "react";

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // some logic to submit to backend
  };

  function renderInputs() {
    const inputs = [];
    for (let i = 0; i < 104; i++) {
      inputs.push(
        <div key={i} className={styles.card}>
          {i}
        </div>,
      );
    }
    return inputs;
  }

  return (
    <div>
      <div className={styles.title}>Inspect Today, Perfect Tomorrow.</div>
      <div>
        <div className={styles.grid}>{renderInputs()}</div>
      </div>
    </div>
  );
}

export default LoginForm;
