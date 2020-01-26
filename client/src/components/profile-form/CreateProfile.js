import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Checkbox,
  Form,
  Radio,
  Select,
  TextArea,
  Input,
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
  Modal,
  Container
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  // state = {};

  // handleChange = (e, { value }) => this.setState({ value });
  return (
    <Fragment>
      <Header size="huge">Create Profile</Header>

      <Segment padded="very" color="teal">
        <Form widths={4}>
          {/* <Form.Group widths="equal"> */}
          <Form.Input
            // fluid
            // label="Company"
            // width={8}
            placeholder="Company"
            name="company"
            value={company}
            id="form-input-first-name"
          />
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Website"
            // width={8}
            placeholder="Website"
            name="website"
            value={website}
          />{" "}
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Location"
            // width={8}
            placeholder="Location"
            name="location"
            value={location}
          />{" "}
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Status"
            // width={8}
            placeholder="Status"
            name="status"
            value={status}
          />
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Skills"
            // width={8}
            placeholder="Skills"
            name="skills"
            value={skills}
          />
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Company"
            // width={8}
            placeholder="Company"
            name="company"
            value={company}
          />
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Company"
            // width={8}
            placeholder="Company"
            name="company"
            value={company}
          />
          <Form.Input
            // error='Please enter your last name'
            // fluid
            // label="Company"
            // width={8}
            placeholder="Company"
            name="company"
            value={company}
          />
          <Form.Checkbox
            label="I agree to the Terms and Conditions"
            // error={{
            //   content: 'You must agree to the terms and conditions',
            //   pointing: 'left',
            // }}
          />
          {/* <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="company"
            name={company}
            placeholder="Company"
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
          />
          <Form.Field
            control={Select}
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label="One"
            value="1"
            checked={value === "1"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Two"
            value="2"
            checked={value === "2"}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label="Three"
            value="3"
            checked={value === "3"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="About"
          placeholder="Tell us more about you..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field> */}
          {/* </Form.Group> */}
        </Form>
      </Segment>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
