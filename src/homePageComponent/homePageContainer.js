import React from "react";
import { StateProvider } from "../lib/state";

import { Navigation } from "../navigationComponent/index";
import { LoginNav } from "../loginNavigationComponent/index";
import { Container1 } from "./components/container1Component";
import { Container2 } from "./components/container2Component";
import { Container3 } from "./components/container3Component";
import { Container4 } from "./components/container4Component";
import { Container5 } from "./components/container5Component";

const HomePage = () => {
  return (
    <StateProvider>
      <div id="app-container">
        <div className="fixed">
          <div className="row justify-content-md-center navigation">
            <div className="col-md-">
              <Navigation />
            </div>
            <div className=".col-sm-">
              <LoginNav />
            </div>
          </div>
        </div>
        <div id="home" className="row justify-content-md-center">
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
        </div>
      </div>
    </StateProvider>
  );
};

export default HomePage;
