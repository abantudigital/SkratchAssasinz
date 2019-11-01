// Dashboard Actions
import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = props => {
  return (
    <div>
      <div className="dash-buttons">
        <p uk-margin="true">
          <Link
            to="/edit-profile"
            className="uk-button uk-button-primary uk-button-large"
          >
            Edit Profile
          </Link>
          <Link
            to="/add-experience"
            className="uk-button uk-button-primary uk-button-large"
          >
            Add Experience
          </Link>
          <Link
            to="/add-education"
            className="uk-button uk-button-primary uk-button-large"
          >
            Add Education
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DashboardActions;
