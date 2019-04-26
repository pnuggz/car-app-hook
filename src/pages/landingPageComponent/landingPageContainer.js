import React from "react";
import { StateProvider } from "../../lib/state";
import { initialState, landingReducer } from "./landingPageReducer";

import { RunningSearch } from "./components/runningSearchComponent/index";
import { NavigationBar } from "../../components/navigationBarComponent/index";
import { SearchBox } from "./components/searchBoxComponent/index";

const LandingPage = () => {
  return (
    <StateProvider initialState={initialState} reducer={landingReducer}>
      <div id="app-container">
        <div className="fixed">
          <NavigationBar />
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

export default LandingPage;
