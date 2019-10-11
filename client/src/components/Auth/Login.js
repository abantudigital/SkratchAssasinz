// Login
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    //! INITIAL STATE DEFAULT FIELD VALUES
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    // if (password !== password2) {
    //   console.log("Passwords do not match!");
    // } else {
    //   console.log("Success!!!");
    // }
  };

  return (
    <Fragment>
      <div className="uk-text-center uk-container">
        <div className="uk-card uk-card-muted uk-card-body uk-width-1-2@m">
          <h1 className="uk-heading-small">Sign In</h1>

          <p className="uk-text-lighter uk-text-italic">
            {" "}
            <span uk-icon="icon: user"></span> Sign into your account
          </p>

          {/* form */}
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group uk-margin">
              <input
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
              className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom"
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
    </Fragment>
  );
};

export default Register;
