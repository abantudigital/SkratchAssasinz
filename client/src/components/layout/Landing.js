import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const Landing = () => {
  return (
    <Fragment>
      <Grid style={{ height: "100vh" }}>
        <Grid.Row id="landing">
          <Grid.Column>
            <div>
              <Header color="olive" as="h1" icon textAlign="center">
                <Header.Content>Under Construction</Header.Content>
              </Header>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Landing;
