import React from "react";
import { StateProvider } from "../lib/state";
import { initialState, loginPageReducer } from "./loginPageReducer";

import { Navigation } from "../navigationComponent/index";
import { LoginNav } from "../loginNavigationComponent/index";
import { LoginForm } from "./components/loginForm";

const LoginPage = () => {
  return (
    <StateProvider initialState={initialState} reducer={loginPageReducer}>
      <div id="app-container">
        <div className="fixed">
          <div className="row navigation">
            <div className="col-md-">
              <Navigation />
            </div>
            <div className=".col-sm-">
              <LoginNav />
            </div>
          </div>
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
