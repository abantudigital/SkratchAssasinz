// Dashboard
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // const profileImg = (
  //   <img
  //     src={
  //       "https://images.unsplash.com/photo-1542395118-9d95347995bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
  //     }
  //   />
  // );

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {profile != null ? (
        <Fragment>
          <div className=" uk-card-secondary">
            <div className="uk-card-body">
              <h1 className="uk-heading-divider">Dashbaord</h1>
              <p className="uk-text-lead">
                <span uk-icon="icon: user"></span> Welcome {user && user.name}
              </p>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
              <div className="uk-margin">
                <button
                  className="uk-button uk-button-danger"
                  onClick={() => deleteAccount()}
                >
                  Delete My Account
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="uk-card-hover uk-card-muted ">
            <div className="uk-card-body dashbord-no-profile">
              <p className="uk-text-lead">
                <span uk-icon="icon: user"></span> Welcome {user && user.name}
              </p>
              <p>
                Looks like you dont have a profile, it's easy as 1, 2...{" "}
                <Link
                  to="/create-profile"
                  className="uk-text-large  uk-button-text"
                >
                  Create Profile
                </Link>
              </p>{" "}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
