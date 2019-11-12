// Edit Profile
import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//! ACTIONS
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    createProfile(formData, history, true);
  };
  return (
    <Fragment>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h1 className="uk-heading-divider">Edit Your Profile</h1>
        </div>
        <p className="uk-text-lead ">
          Let's get some information to make your profile stand out
        </p>
        <small className="uk-text-meta ">* = required field</small>

        <form className="uk-form-stacked" onSubmit={e => onSubmit(e)}>
          <div className="form-group uk-margin">
            <div className="uk-form-controls">
              <select
                name="status"
                className="uk-form-select"
                value={status}
                onChange={e => onChange(e)}
              >
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor</option>
                <option value="intern">intern</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>

          {/* FORM INPUTS */}
          <div className="form-group uk-margin ">
            <div className="uk-form-controls">
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={company}
                onChange={e => onChange(e)}
                className="uk-input"
                id="form-stacked-text"
                uk-tooltip="title: Could be your own company or one you work for; pos: top-right"
              />
            </div>
          </div>

          <div className="form-group uk-margin ">
            <div className="uk-form-controls">
              <input
                type="text"
                placeholder="Website"
                name="website"
                value={website}
                onChange={e => onChange(e)}
                className="uk-input"
                id="form-stacked-text"
                uk-tooltip="title: Could be your own or a company website; pos: bottom-right"
              />
            </div>
          </div>

          <div className="form-group uk-margin ">
            <div className="uk-form-controls">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                onChange={e => onChange(e)}
                className="uk-input"
                id="form-stacked-text"
                uk-tooltip="title: City & State; pos:left"
              />
            </div>
          </div>

          <div className="form-group uk-margin ">
            <div className="uk-form-controls">
              <input
                type="text"
                placeholder="*Skills"
                name="skills"
                value={skills}
                onChange={e => onChange(e)}
                className="uk-input"
                id="form-stacked-text"
                uk-tooltip="title: Please use comma seperated values (eg. remix & mashups,
                midi-controllers);  pos: bottom-right"
              />
            </div>
          </div>

          <div className="form-group uk-margin">
            <div className="uk-form-controls">
              <textarea
                placeholder="A short bio about yourself"
                name="bio"
                value={bio}
                onChange={e => onChange(e)}
                cols="50"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="uk-button uk-button-secondary"
            >
              Add Social Network Links
            </button>
            <span className="uk-text-meta uk-text-italic">Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input uk-margin">
                <div className="uk-form-controls">
                  <span uk-icon="twitter"></span>
                  <input
                    type="text"
                    placeholder="Twitter URL"
                    name="twitter"
                    value={twitter}
                    onChange={e => onChange(e)}
                    className="uk-input-text"
                    id="form-stacked-text"
                  />
                </div>
              </div>

              <div className="form-group social-input uk-margin">
                <div className="uk-form-controls">
                  <span uk-icon="facebook"></span>
                  <input
                    type="text"
                    placeholder="Facebook URL"
                    name="facebook"
                    value={facebook}
                    onChange={e => onChange(e)}
                    className="uk-input-text"
                    id="form-stacked-text"
                  />
                </div>
              </div>

              <div className="form-group social-input uk-margin">
                <div className="uk-form-controls">
                  <span uk-icon="youtube"></span>
                  <input
                    type="text"
                    placeholder="Youtube URL"
                    name="youtube"
                    value={youtube}
                    onChange={e => onChange(e)}
                    className="uk-input-text"
                    id="form-stacked-text"
                  />
                </div>
              </div>

              <div className="form-group social-input uk-margin">
                <div className="uk-form-controls">
                  <span uk-icon="linkedin"></span>
                  <input
                    type="text"
                    placeholder="Linkedin URL"
                    name="linkedin"
                    value={linkedin}
                    onChange={e => onChange(e)}
                    className="uk-input-text"
                    id="form-stacked-text"
                  />
                </div>
              </div>

              <div className="form-group social-input uk-margin">
                <div className="uk-form-controls">
                  <span uk-icon="instagram"></span>
                  <input
                    type="text"
                    placeholder="Instagram URL"
                    name="instagram"
                    value={instagram}
                    onChange={e => onChange(e)}
                    className="uk-input-text"
                    id="form-stacked-text"
                  />
                </div>
              </div>
            </Fragment>
          )}

          <input
            type="submit"
            className="uk-button uk-button-large uk-button-secondary"
          />
          <Link
            to="/dashboard"
            className="uk-button uk-button-large uk-button-primary"
          >
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

//! actions
EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

//! profile state
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
