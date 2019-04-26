import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../../lib/state";

import { loginFormRequest } from "./loginFormMdl";

const LoginForm = () => {
  const [{ loginForm }, dispatchLoginForm] = useStateValue();

  const [usernameValidation, setUsernameValidation] = useState(false);

  const handleUsername = value => {
    dispatchLoginForm({
      type: "SET_USERNAME_FORM",
      payload: value
    });
  };

  const handlePassword = value => {
    dispatchLoginForm({
      type: "SET_PASSWORD_FORM",
      payload: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const username = loginForm.username;
    const password = loginForm.password;

    loginFormRequest(username, password);
  };

  return (
    <form id="login">
      <div className="signup-form">
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="username"
            placeholder="Username"
            onInput={event => handleUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            className="password"
            placeholder="Password"
            onInput={event => handlePassword(event.target.value)}
          />
        </div>
        <button className="login-button" onClick={event => handleSubmit(event)}>
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
