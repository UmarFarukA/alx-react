import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  handleLoginSubmit = () => {
    setIsLoggedIn(true)
  }

  handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  handleChangePassword = (e) => {
    setPassword(e.target.value)
  }


  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false)
      }
    }
  }, [email, password]);


  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email" value={email}></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password" value={password}></input>
          <button type="submit" disabled={!enableSubmit}>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
