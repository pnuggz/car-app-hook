import React from "react";
import Plx from "react-plx";

import {
  parallaxContainer4Banner1Group1Text1,
  parallaxContainer4Banner1Group1Text2,
  parallaxContainer4Banner1Group2Text1,
  parallaxContainer4Banner1Group2Text2,
  parallaxContainer4Banner1Group3Text1,
  parallaxContainer4Banner1Group3Text2,
  parallaxContainer4Banner2Visual1,
  parallaxContainer4Banner2Visual2,
  parallaxContainer4Banner2Visual3
} from "../plxData";

export const Container4 = () => {
  return (
    <div className="container-4">
      <div className="banner-wrapper">
        <div className="banner-1">
          <div className="text-1-positioning">
            <Plx
              className="parallaxContainer4Banner1Group1Text1"
              parallaxData={parallaxContainer4Banner1Group1Text1}
              style={{ visibility: "visible" }}
            >
              <div className="text-1">Awesome</div>
            </Plx>
          </div>
          <Plx
            className="parallaxContainer4Banner1Group1Text2"
            parallaxData={parallaxContainer4Banner1Group1Text2}
            style={{ visibility: "visible" }}
          >
            <div className="text-2">
              "This app have saved me countless hours looking for the best deal.
              Thanks!"
            </div>
          </Plx>

          <div className="text-1-positioning">
            <Plx
              className="parallaxContainer4Banner1Group2Text1"
              parallaxData={parallaxContainer4Banner1Group2Text1}
              style={{ visibility: "visible" }}
            >
              <div className="text-1">Bargain</div>
            </Plx>
          </div>
          <Plx
            className="parallaxContainer4Banner1Group2Text2"
            parallaxData={parallaxContainer4Banner1Group2Text2}
            style={{ visibility: "visible" }}
          >
            <div className="text-2">
              "I managed to pick up my dream car without doing anything at all."
            </div>
          </Plx>

          <div className="text-1-positioning">
            <Plx
              className="parallaxContainer4Banner1Group3Text1"
              parallaxData={parallaxContainer4Banner1Group3Text1}
              style={{ visibility: "visible" }}
            >
              <div className="text-1">Easy</div>
            </Plx>
          </div>
          <Plx
            className="parallaxContainer4Banner1Group3Text2"
            parallaxData={parallaxContainer4Banner1Group3Text2}
            style={{ visibility: "visible" }}
          >
            <div className="text-2">
              "With only a few clicks, I managed to get the best cars straight
              into my email on a daily basis."
            </div>
          </Plx>
          <div className="overlay" />
        </div>
        <div className="banner-2">
          <div className="visual-wrapper">
            <div className="visual-1">
              <Plx
                className="parallaxContainer4Banner2Visual1"
                parallaxData={parallaxContainer4Banner2Visual1}
              >
                <img src={require("../img/toyota.png")} alt="Toyota" />
              </Plx>
            </div>
            <div className="visual-2">
              <Plx
                className="parallaxContainer4Banner2Visual1"
                parallaxData={parallaxContainer4Banner2Visual2}
              >
                <img src={require("../img/x3.png")} alt="X3" />
              </Plx>
            </div>
            <div className="visual-3">
              <Plx
                className="parallaxContainer4Banner2Visual1"
                parallaxData={parallaxContainer4Banner2Visual3}
              >
                <img src={require("../img/gtr.png")} alt="GTR" />
              </Plx>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
