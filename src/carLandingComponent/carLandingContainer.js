import React from "react";
import { StateProvider } from "../lib/state";
import { initialState, carLandingReducer } from "./carLandingReducer";

import { RunningSearch } from "./components/runningSearchComponent/index";
import { Navigation } from "../navigationComponent/index";
import { LoginNav } from "../loginNavigationComponent/index";
import { SearchBox } from "./components/searchBoxComponent/index";

const CarLandingPage = () => {
  return (
    <StateProvider initialState={initialState} reducer={carLandingReducer}>
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
        <div id="landing" className="row justify-content-md-center">
          <div className="wrapper">
            <div className="App">
              <div className="top-wrapper">
                {/* Background Image */}
                <div className="bg-img">
                  <div className="bg-overlay" />
                </div>

                {/* Heading for Welcome */}
                <header className="App-header">
                  <div className="row justify-content-md-center">Welcome</div>
                </header>

                {/* Search Container */}
                <div className="container-1">
                  <SearchBox />
                </div>
              </div>
              <div className="container-2">
                <div className="running-header">
                  <div className="row">Current Searches</div>
                </div>
                <RunningSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StateProvider>
  );
};

export default CarLandingPage;
