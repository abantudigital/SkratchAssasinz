// Login
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="uk-section background-login-out uk-height-viewport">
        <div className="uk-text-center uk-container">
          <div className="uk-align-center uk-card card-login-out uk-card-body uk-width-1-2@m">
            <div className="">
              <h1 className="uk-heading-small">Sign In</h1>
              <p className="meta">Sign into your account</p>
            </div>

            {/* form */}
            <form className=" form" onSubmit={e => onSubmit(e)}>
              <div className="">
                <input
                  className="uk-input uk-width-1-2"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
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
                  required
                />
              </div>

              <button
                type="submit"
                value="Login"
                className="uk-button uk-button-secondary
                uk-width-1-2
                uk-margin-small-bottom"
              >
                Login
              </button>
            </form>
            <p className="uk-text-meta">
              Don't have an account?{" "}
              <Link className="uk-link-heading" to="/register">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
