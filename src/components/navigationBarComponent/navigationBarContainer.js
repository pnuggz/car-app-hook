import React from "react";

import { Navigation } from "./components/navigationComponent/index";
import { LoginNav } from "./components/loginNavigationComponent/index";

const NavigationBar = () => {
  return (
    <div className="row justify-content-md-center navigation">
      <div className="col-md-">
        <Navigation />
      </div>
      <div className=".col-sm-">
        <LoginNav />
      </div>
    </div>
  );
};

export default NavigationBar;
