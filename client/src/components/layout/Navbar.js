// Navbar
import React, { Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Auth/Login";

const Navbar = () => {
  return (
    <div className="uk-section-muted uk-preserve-color">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-muted; top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div uk-navbar="true">
              <ul className="uk-navbar-nav uk-text-light">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li className="uk-active">
                  <Link to="/login">Login</Link>
                </li>
                <li className="uk-active">
                  <Link to="/register">Register</Link>
                </li>
                <li className="uk-active">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="uk-active">
                  <Link to="/contact">DJs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
