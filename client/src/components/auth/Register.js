import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label,
  Input
} from "semantic-ui-react";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    // default values
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match!", "red");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Grid
        textAlign="center"
        style={{ height: "auto", padding: "7%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            {/* <Image src='./logo.png' /> */}
            Register with us
          </Header>
          <Form onSubmit={e => onSubmit(e)} size="large">
            <Segment stacked>
              <Form.Input
                required
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
              <Form.Input
                required
                fluid
                icon="at"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm password"
                type="password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
              />
              <Button color="green" fluid size="large" value="Register">
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login </Link>
          </Message>
        </Grid.Column>
      </Grid>
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

export default connect(mapStateToProps, { setAlert, register })(Register);

/* 
 CONNECT TAKES IN TWO THINGS:
! any State that you want to map to component properties
! an object with any dispatched Actions
! connect(mapStateToProps, {action})

* will allow you to access "props.setalert"
* props come in at the top of the component

* setAlert(msg, alertType) 
* passes "msg" & "alertType" to your action, generate an id & dispatch SET_ALERT with that message, alertType and id
*/

{
  /* <Form.Field>
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                />
                {name.length < 0 ? (
                  <Label pointing prompt>
                    Please enter name
                  </Label>
                ) : (
                  ""
                )}
              </Form.Field> */
}
