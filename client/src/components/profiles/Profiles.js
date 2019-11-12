// PROFILES
import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    // effect
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className=" uk-align-center profile-header uk-heading uk-heading-large">
            DJs
          </h1>
          <p className="uk-align-center profile-title uk-text-lead">
            <span uk-icon="users"></span> Browse & connect with DJs
          </p>

          <div
            className="uk-container uk-align-center uk-grid-large uk-child-width-expand@s"
            uk-grid="true"
          >
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileItem
                    className="profile-main"
                    key={profile._id}
                    profile={profile}
                  />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
