import React from "react";
import Plx from "react-plx";

import {
  parallaxContainer5,
  parallaxContainer5Banner1Text1,
  parallaxContainer5Banner1Text2,
  parallaxContainer5Banner1Text3
} from "../plxData";

export const Container5 = () => {
  return (
    <div>
      <Plx
        className="parallaxContainer5"
        parallaxData={parallaxContainer5}
        style={{ visibility: "visible" }}
      >
        <div className="container-5">
          <div className="banner-1">
            <div className="wrapper">
              <div className="text-wrapper">
                <Plx
                  className="parallaxContainer5Banner1Text1"
                  parallaxData={parallaxContainer5Banner1Text1}
                  style={{ visibility: "visible" }}
                >
                  <div className="text-1">Dream.</div>
                </Plx>
                <Plx
                  className="parallaxContainer5Banner1Text2"
                  parallaxData={parallaxContainer5Banner1Text2}
                  style={{ visibility: "visible" }}
                >
                  <div className="text-2">Plan.</div>
                </Plx>
                <Plx
                  className="parallaxContainer5Banner1Text3"
                  parallaxData={parallaxContainer5Banner1Text3}
                  style={{ visibility: "visible" }}
                >
                  <div className="text-3">Start.</div>
                </Plx>
              </div>
            </div>
          </div>
          <div className="banner-2">
            <div className="visual-1">
              <div className="content">
                <h3>Dream your next great drive, and make it a reality.</h3>
              </div>
            </div>
            <div className="visual-2">
              <div className="content">
                <h3>
                  Plan on what makes and models you want, and the price range to
                  suit you.
                </h3>
              </div>
            </div>
            <div className="visual-3">
              <div className="content">
                <h3>Sign up and get started.</h3>
              </div>
            </div>
          </div>
        </div>
      </Plx>
    </div>
  );
};
