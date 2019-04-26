import React from "react";

export const Container2 = () => {
  return (
    <div className="container-2">
      <div className="banner-1">
        <div className="visual-wrapper">
          <div className="visual">
            <video className="videoTag" autoPlay loop muted>
              <source
                src="https://ak4.picdn.net/shutterstock/videos/1010242904/preview/stock-footage-a-man-chooses-to-buy-a-car-on-the-site-looking-at-used-vehicle-to-buy-on-a-smartphone-app-close.webm"
                type="video/mp4"
              />
              <source
                src="https://ak4.picdn.net/shutterstock/videos/1010242904/preview/stock-footage-a-man-chooses-to-buy-a-car-on-the-site-looking-at-used-vehicle-to-buy-on-a-smartphone-app-close.webm"
                type="video/ogg"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="banner-2">
        <div className="text-wrapper">
          <div className="text">
            <div className="column">
              <h3>
                Stop laboriously looking at multiple websites, and do it all in
                one.
              </h3>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text">
            <div className="column">
              <h3>
                Using our intelligent AI, you will receive updates on the best
                deals online.
              </h3>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="text">
            <div className="column">
              <h3>When all is said and done, buy your next dream car.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
