import React from "react";
import Plx from "react-plx";

import {
  parallaxContainer3,
  parallaxContainer3Text1,
  parallaxContainer3Text2,
  parallaxContainer3Text3
} from "../plxData";

export const Container3 = () => {
  return (
    <div className="container-3">
      <Plx className="parallaxContainer3" parallaxData={parallaxContainer3}>
        <div className="text-wrapper">
          <Plx
            className="parallaxContainer3Text1"
            parallaxData={parallaxContainer3Text1}
          >
            <div className="text-1">Search.</div>
          </Plx>
          <Plx
            className="parallaxContainer3Text2"
            parallaxData={parallaxContainer3Text2}
          >
            <div className="text-2">Review.</div>
          </Plx>
          <Plx
            className="parallaxContainer3Text3"
            parallaxData={parallaxContainer3Text3}
          >
            <div className="text-3">Buy.</div>
          </Plx>
        </div>
      </Plx>
    </div>
  );
};
