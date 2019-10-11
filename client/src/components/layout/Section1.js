import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Fragment>
      <div className="uk-section uk-section-large uk-section-muted">
        <div className="uk-container">
          <h3>Section</h3>
          <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="true">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Section1;
