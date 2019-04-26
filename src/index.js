import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { HomePage } from "./pages/homePageComponent/index";
import { LoginPage } from "./pages/loginPageComponent/index";
import { Logout } from "./pages/logoutPageComponent/index";
import { LandingPage } from "./pages/landingPageComponent/index";

import checkAuthorization from "./lib/check-auth";
import history from "./lib/history";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route
        exact={true}
        path="/"
        render={() =>
          checkAuthorization() ? <Redirect to="/landing" /> : <HomePage />
        }
      />
      <Route
        exact={true}
        path="/landing"
        render={() =>
          checkAuthorization() ? <LandingPage /> : <Redirect to="/login" />
        }
      />
      <Route exact={true} path="/home" component={HomePage} />
      <Route exact={true} path="/login" component={LoginPage} />
      <Route exact={true} path="/logout" component={Logout} />
      {/* 
      <Route
        exact={true}
        path="/login"
        render={() =>
          checkAuthorization() ? <Redirect to="/profile" /> : <Login />
        }
      />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/signup" component={Signup} />
      <Route path="/landing" component={carLandingPage} />
       */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
