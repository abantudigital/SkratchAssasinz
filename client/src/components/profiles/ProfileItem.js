// PROFILE ITEM
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className="profile-card uk-card uk-card-small uk-width-1-1@m">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle">
          <div className="uk-width-auto">
            <h2 id="profile-card-name">
              {" "}
              <img
                className="uk-border-circle"
                width="90"
                height="90"
                src={avatar}
                alt=""
              />{" "}
              {name}
            </h2>
          </div>
          {/* <div className="uk-width-expand">
            <h2 id="profile-card-name">{name}</h2>
          </div> */}
        </div>
      </div>

      <div className="uk-card-body">
        <p>
          {status} {company && <span> at {company}</span>}{" "}
        </p>
        <p className="margin"> {location && <span> {location} </span>}</p>
        <Link
          to={`/profile/${_id}`}
          className="uk-button uk-button-large uk-button-promary"
        >
          View Profile
        </Link>

        <ul className="skills uk-align-right">
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="uk-text-primary">
              <span uk-icon="check"></span> {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
