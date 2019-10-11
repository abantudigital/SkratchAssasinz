// Landing
import React from "react";
// import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Landing = () => {
  return (
    <div>
      <div className=" landing uk-section-large uk-section-secondary   uk-preserve-color">
        <div className="uk-container">
          <h1 className="uk-heading-2xlarge">Skratch Assasinz</h1>
        </div>
        <span uk-icon="icon: chevron-down; ratio: 3"></span>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Landing;
