// Add Education
import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="uk-card uk-card-secondary" uk-grid="true">
        <div className="uk-card-body uk-align-center">
          <h1 className="uk-heading-divider">Add Your Education</h1>
          <p className="uk-text-lead">
            Add any school or bootcamp that you have attended
          </p>
          <small className="uk-text-meta">* = required fields</small>

          <form
            className="form uk-form"
            onSubmit={e => {
              e.preventDefault();

              addEducation(formData, history);
            }}
          >
            <div className="form-group ">
              <div className="uk-margin">
                <input
                  className="uk-input uk-width-1-1"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="* School or Bootcamp"
                  name="school"
                  value={school}
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
                  placeholder="* Degree"
                  name="degree"
                  value={degree}
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
                  placeholder="Fieldofstudy"
                  name="fieldofstudy"
                  value={fieldofstudy}
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
                Current School
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(AddEducation);
