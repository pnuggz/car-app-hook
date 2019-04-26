import React from "react";
import { StateProvider } from "../../lib/state";
import { initialState, loginPageReducer } from "./loginPageReducer";

import { NavigationBar } from "../../components/navigationBarComponent/index";
import { LoginForm } from "./components/loginFormComponent/index";

const LoginPage = () => {
  return (
    <StateProvider initialState={initialState} reducer={loginPageReducer}>
      <div id="app-container">
        <div className="fixed">
          <NavigationBar />
        </div>
        <div id="login-form-group">
          <div className="wrapper">
            <div className="form-header">Car-App.</div>
            <div className="box-form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </StateProvider>
  );
};

export default LoginPage;
