// Landing
import React, { Fragment, useState } from "react";
// import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Contact from "./Contact";

const Landing = () => {
  // const [displayContactForm, toggleContantForm] = useState(false);

  return (
    <Fragment>
      <section
        className="uk-section uk-height-viewport uk-section-secondary"
        uk-grid="true"
      >
        {/* <div className="landing uk-section uk-section-secondary uk-height-viewport uk-width-1-1  uk-container">
          <div className="toggle uk-card uk-card-primary uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title">title</h3>
            <p>
              Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <p className="toggle" hidden>
            <Login />
          </p>
          <button
            className="uk-button uk-button-default"
            type="button"
            uk-toggle="target: .toggle; animation:  uk-animation-fade"
          >
            login
          </button>
        </div> */}
      </section>
    </Fragment>
  );
};

export default Landing;

{
  /* <button
            // onClick={() => toggleContantForm(!displayContactForm)}
            type="button"
            className="uk-button uk-button-secondary "
            uk-toggle="target: #contact; mode: click; duration: 2000; animation: uk-animation-slide-right"
          >
            Contact Me
          </button>
          <Contact id="contact" /> */
}

{
  /* {displayContactForm && <Contact />} */
}

{
  /* <div
          className="uk-section uk-width-1-1 uk-section-primary uk-section-large"
          uk-grid="true"
        >
          <div className="uk-width-1-2 uk-container">
            <h1>Width 1 of 2</h1>
          </div>
          <div className="uk-width-1-2  uk-container">
            <h1>Width 2 of 2</h1>
          </div>
        </div>
{
  /* <div className="uk-margin">
<Navbar />
</div> */
}
// className="land-contain"
{
  /* <div className="right-half">
<Section1 />
</div> */
}
//    <div className="uk-position-center">
//    <span uk-overlay-icon="true">
//      <ul className="uk-iconnav uk-iconnav-vertical">
//        <li>
//          <a href="#!" uk-icon="icon: plus"></a>
//        </li>
//      </ul>
//    </span>
//  </div>
