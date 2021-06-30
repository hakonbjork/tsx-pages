import React, { useState } from "react";

interface Props {
  onLoginSubmit: (username: string, password: string) => any;
  loggedIn: boolean;
}

const LoginComp = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (props.loggedIn) {
    window.location.href = "/#/home";
  }

  const onLoginPressed = () => {
    props.onLoginSubmit(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Brukernavn: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Passord: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={onLoginPressed}> Login </button>
      </form>
    </div>
  );
};

export default LoginComp;
