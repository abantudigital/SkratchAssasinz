// Navbar
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <ul className="uk-navbar-nav">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profiles">DJs</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <a className="ui red button" onClick={logout} href="#!">
            logout
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div>
      <ul className="uk-navbar-nav">
        <li>
          <Link to="/profiles">DJs</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <Fragment>
      <nav
        className="uk-navbar-container"
        uk-sticky="bottom: #offset"
        uk-navbar="true"
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li>
              <a href="#!">Music</a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active">
                    <a href="#!">Active</a>
                  </li>
                  <li>
                    <a href="#!">Item</a>
                  </li>
                  <li>
                    <a href="#!">Item</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a className="">
                {!loading && (
                  <Fragment>
                    {" "}
                    {isAuthenticated ? authLinks : guestLinks}{" "}
                  </Fragment>
                )}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="uk-navbar-container uk-navbar-primary" uk-navbar="true">
        <div className="uk-navbar-left">
          <a className="uk-navbar-nav">
            <Link className="" to="/">
              Home
            </Link>
          </a>
          <a className=" ">
            <Link className="" to="/contact">
              Contact
            </Link>
          </a>
        </div>
        <div className="uk-navbar-right">
          <a className="">
            {!loading && (
              <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
            )}
          </a>
        </div>
      </div> */}
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
