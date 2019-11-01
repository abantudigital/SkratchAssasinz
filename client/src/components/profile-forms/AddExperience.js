// Add Experience
import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="uk-card uk-card-secondary" uk-grid="true">
        <div className="uk-card-body uk-align-center">
          <h1 className="uk-heading-divider">Add An Experience</h1>
          <p className="uk-text-lead">
            Add any developer/ programming positions that you have had in the
            past
          </p>
          <small className="uk-text-meta">* = required fields</small>

          <form
            className="form uk-form"
            onSubmit={e => {
              e.preventDefault();

              addExperience(formData, history);
            }}
          >
            <div className="form-group ">
              <div className="uk-margin">
                <input
                  className="uk-input uk-width-1-1"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="* Job Title"
                  name="title"
                  value={title}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>

            <div className="form-group ">
              <div className="uk-margin">
                <input
                  className="uk-input uk-width-1-1"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="* Company"
                  name="company"
                  value={company}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
            </div>

            <div className="form-group ">
              <div className="uk-margin">
                <input
                  className="uk-input uk-width-1-1"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="uk-margin">
                <label htmlFor="" className="uk-label">
                  From
                </label>
                <input
                  className="uk-form-small uk-width-1-1"
                  type="date"
                  name="from"
                  value={from}
                  onChange={e => onChange(e)}
                />
              </div>
            </div>

            <div className="form-group uk-form-controls">
              <p>
                <input
                  type="checkbox"
                  name="current"
                  checked={current}
                  value={current}
                  onChange={e => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />{" "}
                Current Job
              </p>
            </div>

            <div className="form-group">
              <div className="uk-margin">
                <label className="uk-label">To</label>
                <input
                  className="uk-form-small uk-width-1-1"
                  type="date"
                  name="to"
                  value={to}
                  onChange={e => onChange(e)}
                  disabled={toDateDisabled ? "disabled" : ""}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="uk-margin">
                <textarea
                  className="uk-text-area uk-width-1-1"
                  col="15"
                  rows="5"
                  placeholder="Job Description"
                  name="description"
                  value={description}
                  onChange={e => onChange(e)}
                ></textarea>
              </div>
            </div>

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
      </div>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(AddExperience);
