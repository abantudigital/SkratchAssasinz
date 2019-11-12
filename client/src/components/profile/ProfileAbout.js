// Profile About
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div>
      {bio && (
        <Fragment>
          <h2 className="uk-header">{name.trim().split(" ")[1]}'s bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}
      <h3>Skill Set</h3>
      <div className="skills-about">
        {skills.map((skill, index) => (
          <div key={index} className="uk-margin">
            <span uk-icon="check"></span> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
