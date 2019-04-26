import React from "react";
import Plx from "react-plx";

import {
  parallaxContainer1Banner1,
  parallaxContainer1Banner2
} from "../plxData";

export const Container1 = () => {
  return (
    <div className="container-1">
      <Plx
        className="parallaxContainer1Banner1"
        parallaxData={parallaxContainer1Banner1}
      >
        <div className="banner-1">
          <div className="new">
            <h4>A new way to buy cars!</h4>
          </div>
          <div className="join">
            <div className="para-1">
              <h5>Car-App.</h5>
              <p>Revolutionising how you get used car bagains.</p>
            </div>
            <div className="para-2">
              <h5>
                <a href="/signup">Sign Up Now!</a>
              </h5>
              <p> </p>
            </div>
          </div>
        </div>
      </Plx>

      <div className="banner-2">
        <div className="video">
          <Plx
            className="parallaxContainer1Banner2"
            parallaxData={parallaxContainer1Banner2}
          >
            <video className="videoTag" autoPlay loop muted>
              <source
                src="https://ak5.picdn.net/shutterstock/videos/24035875/preview/stock-footage-growing-global-network-and-data-connections-you-can-use-it-for-a-technology-communication-or.webm"
                type="video/mp4"
              />
              <source
                src="https://ak5.picdn.net/shutterstock/videos/24035875/preview/stock-footage-growing-global-network-and-data-connections-you-can-use-it-for-a-technology-communication-or.webm"
                type="video/ogg"
              />
            </video>
          </Plx>
        </div>
      </div>
    </div>
  );
};
