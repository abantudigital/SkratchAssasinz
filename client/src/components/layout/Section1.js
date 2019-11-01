import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Login from "../Auth/Login";

const Section1 = () => {
  return (
    <Fragment>
      <div className="landing">
        <Login />
      </div>
    </Fragment>
  );
};

export default Section1;
