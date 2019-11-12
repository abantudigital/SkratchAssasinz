// Landing
import React, { Fragment } from "react";
// import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Section1 from "./Section1";
// import Section2 from "./Section2";
// import Contact from "./Contact";
// import Login from "../Auth/Login";
// import Register from "../Auth/Register";
//import spark from "../../images/records.jpeg";

const Landing = () => {
  // const [sidebar, opensidebar] = useState({});

  // const onClick = e => {
  //   e.preventDefault();

  //   alert("You clicked me!");
  // };
  return (
    <Fragment>
      <div className="">
        <div
          className="uk-width-1-1 uk-section uk-section-primary uk-section-xlarge  
        uk-background-fixed uk-background-center-center uk-height-medium landing
        "
        >
          {/* <h1>landing</h1> */}
        </div>
        <div className="uk-section uk-section-muted uk-section-xlarge">
          <h1>MAIN</h1>
        </div>
        <footer className="uk-section uk-section-secondary uk-section-small">
          <h4>footer</h4>
        </footer>
      </div>
    </Fragment>
  );
};

export default Landing;

/* <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div>
          <div>nested</div> */

/* <div className="box box5">five</div>
        <div className="box box6">six</div>
        <div className="box box7">seven</div> */
