// ALERT COMPONENT
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message, Label } from "semantic-ui-react";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id}>
      <Message floating color={`${alert.alertType}`}>
        <Message.Header>{alert.msg}</Message.Header>
      </Message>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);

// Anytime you wanna intereact a component with redux, whether you're calling an action or getting the state, you wanna use connect

// In this case we want to get the alert state, essentially tony the updated state being passed down.

// The array you saw in the redux devtools, you want to fetch that into this component

// Create a variable called "mapStateToProps"

//? You're mapping the redux state to a prop in this component, so that you have access to it. In this case it will be the array of alerts

// "alerts" is the prop name. can call it anything

//! but how did i get the "state" to put it in as a parameter in mapStatetoProps?

/*
 * ITS AN APP LEVEL STATE!!!!
 * COMING FROM THE ROOT REDUCER.
 * STATE."..."
 */

// Then you'll have access to the alert state w/ props.alerts. or you could destructor it w ({alerts})
