// DASHBOARD
import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { motion } from "framer-motion";
import {
  Image,
  Button,
  Loader,
  Dimmer,
  Segment,
  Icon,
  Header,
  HeaderContent,
  Card,
  Grid,
  Modal
} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Dimmer active>
      <Loader size="large" />
    </Dimmer>
  ) : (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment color="red" padded="very">
            <Header>Dashboard</Header>
            <HeaderSubHeader>Welcome {user && user.name}!</HeaderSubHeader>
            {profile !== null ? (
              <Fragment>has profile</Fragment>
            ) : (
              <Fragment>
                <p>You have not created a profile, please add some info</p>
                <Link to="/create-profile">
                  <Button size="large" color="green" inverted>
                    <Icon name="checkmark" /> Create Profile!
                  </Button>
                </Link>
              </Fragment>
            )}
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //? REDUX APP LEVEL STATES
  //? authState, profileState, alertState
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

// <Modal trigger={<Button>Basic Modal</Button>} basic size="small">
//   <Header icon="archive" content="Archive Old Messages" />
//   <Modal.Content>
//     <p>You have not created a profile, please add some info</p>
//   </Modal.Content>
//   <Modal.Actions>
//     <Button basic color="red" inverted>
//       <Icon name="remove" /> stay your corny ass out
//     </Button>
//     <Button color="green" inverted>
//       <Icon name="checkmark" /> Create Profile!
//     </Button>
//   </Modal.Actions>
// </Modal>
