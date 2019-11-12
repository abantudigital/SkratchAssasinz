import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import spark from "../../images/Recordplayer2_1080p_Videvo.mov";

const Section1 = () => {
  return (
    <Fragment>
      <div class="uk-cover-container uk-height-viewport">
        <video
          className="uk-cover"
          src={spark}
          loop
          uk-video="autoplay: inview"
        ></video>
        <div className="uk-overlay uk-overlay-secondary uk-dark uk-position-center">
          <h1>Skratch Assasinz</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Section1;
