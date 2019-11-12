// Register
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  //! INITIAL STATE (component level)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match!", "uk-alert-danger");
    } else {
      register({ name, email, password });
    }
  };

  //! Redirect
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="uk-section background-login-out uk-height-viewport">
        <div className="uk-text-center uk-container">
          <div className="uk-align-center uk-card card-login-out uk-card-body uk-width-1-2@m">
            <h1 className="uk-heading-small">Sign Up</h1>

            <p className="uk-text-lighter uk-text-italic">
              {" "}
              <span uk-icon="icon: user"></span> Create your account
            </p>

            {/* form */}
            <form className="form" onSubmit={e => onSubmit(e)}>
              <div className="form-group uk-margin">
                <input
                  className="uk-input uk-width-1-2"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  // required
                />
              </div>

              <div className="form-group uk-margin">
                <input
                  className="uk-input uk-width-1-2"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  // required
                />
              </div>

              <div className="form-group uk-margin">
                <input
                  className="uk-input uk-width-1-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  // required
                />
              </div>

              <div className="form-group uk-margin">
                <input
                  className="uk-input uk-width-1-2"
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  // required
                />
              </div>

              <button
                type="submit"
                value="Register"
                className="uk-button uk-button-secondary uk-width-1-2 uk-margin-small-bottom"
              >
                Register
              </button>
            </form>
            <p className="uk-text-meta">
              Already have an account?{" "}
              <Link className="uk-link-heading" to="/login">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
