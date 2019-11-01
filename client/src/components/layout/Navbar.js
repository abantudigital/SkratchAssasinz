// Navbar
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
// import Landing from "./Landing";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="uk-navbar-nav uk-navbar-right">
      <li>
        <Link to="/dashboard">
          <span uk-icon="icon: user"></span>
          <span>Dashboard</span>
        </Link>
      </li>

      <li>
        <a onClick={logout} href="#!">
          <span uk-icon="icon: sign-out"></span>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="uk-navbar-nav">
      <li className="uk-active">
        <Link to="/#!">DJs</Link>
      </li>
      <li className="uk-active">
        <Link to="/register">Register</Link>
      </li>
      <li className="uk-active">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav className="uk-navbar-container" uk-navbar="dropbar: true; true">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav ">
              <li className="uk-active">
                <Link to="/">Home</Link>
              </li>
              <li className="uk-active">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            {!loading && (
              <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
            )}
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
