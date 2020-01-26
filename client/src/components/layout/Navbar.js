//! NAVBAR.JS
import React, { Component, useState, Fragment } from "react";
import { Menu, Segment, Icon, ItemGroup, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [activeItem, setActiveItem] = useState("home");

  const authLinks = (
    <Fragment>
      <Menu.Item
        // icon="logout"
        as={Link}
        to="/dashboard"
        name="Dashboard"
        // active={activeItem === "logout"}
        // onClick={logout}
      />
      <Menu.Item
        icon="logout"
        as={Link}
        to="#!"
        name="Logout"
        active={activeItem === "logout"}
        onClick={logout}
      />
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Menu.Item
        as={Link}
        to="#!"
        name="DJs"
        active={activeItem === "DJs"}
        onClick={() => setActiveItem("DJ'S")}
      />

      <Menu.Item
        as={Link}
        to="/register"
        name="Register"
        // icon="register"
        active={activeItem === "Register"}
        onClick={() => setActiveItem("Register")}
      />

      <Menu.Item
        as={Link}
        to="/login"
        name="Login"
        // Icon="login"
        active={activeItem === "Login"}
        onClick={() => setActiveItem("Login")}
      />
    </Fragment>
  );

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to="/"
          icon={{
            name: "home",
            size: "large"
          }}
          active={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        />

        {/* FLOAT MENU RIGHT */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Menu>
    </Segment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
