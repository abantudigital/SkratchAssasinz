import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div>
      <div className="uk-align-center">
        <img
          className="uk-border-circle"
          width="100"
          height="100"
          src={avatar}
          alt=""
        />
        <h1>{name}</h1>
        <p className="lead">
          {status} {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <div className="icons my-1">
          {website && (
            <a
              href={website}
              // target="_blank"
              className="uk-icon-link"
              uk-icon="icon:world; ratio:2"
            ></a>
          )}

          {social && social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              className="uk-icon-link"
              uk-icon="icon:twitter; ratio:2"
            ></a>
          )}
          {social && social.facebook && (
            <a
              href={social.facebook}
              // target="_blank"
              className="uk-icon-link"
              uk-icon="icon:facebook; ratio:2"
            ></a>
          )}
          {social && social.instagram && (
            <a
              href={social.instagram}
              // target="_blank"
              className="uk-icon-link"
              uk-icon="icon:instagram; ratio:2"
            ></a>
          )}
          {social && social.youtube && (
            <a
              href={social.youtube}
              // target="_blank"
              className="uk-icon-link"
              uk-icon="icon:youtube; ratio:2"
            ></a>
          )}
        </div>
      </div>
    </div>

    //         className="uk-grid-small uk-align-center uk-text-center uk-flex-middle"
    //         uk-grid="true"
    //       >
    //         <div className="uk-width-auto">
    // <img
    //   className="uk-border-circle"
    //   width="100"
    //   height="100"
    //   src={avatar}
    //   alt=""
    // />
    //         </div>
    //         <div className="uk-width-expand">
    //           <h1 className="uk-card-title uk-margin-remove-bottom">{name}</h1>
    // <p className="lead">
    //   {status} {company && <span> at {company}</span>}
    // </p>
    // <p>{location && <span>{location}</span>}</p>
    // <div className="icons my-1">
    //   {website && (
    //     <a
    //       href={website}
    //       className="uk-icon-link"
    //       uk-icon="icon:world; ratio:2"
    //     ></a>
    //   )}

    //   {social && social.twitter && (
    //     <a
    //       href={social.twitter}
    //       className="uk-icon-link"
    //       uk-icon="icon:twitter; ratio:2"
    //     ></a>
    //   )}
    //   {social && social.facebook && (
    //     <a
    //       href={social.facebook}
    //       className="uk-icon-link"
    //       uk-icon="icon:facebook; ratio:2"
    //     ></a>
    //   )}
    //   {social && social.instagram && (
    //     <a
    //       href={social.instagram}
    //       className="uk-icon-link"
    //       uk-icon="icon:instagram; ratio:2"
    //     ></a>
    //   )}
    //   {social && social.youtube && (
    //     <a
    //       href={social.youtube}
    //       className="uk-icon-link"
    //       uk-icon="icon:youtube; ratio:2"
    //     ></a>
    //   )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="profile-top bg-primary p-2">
    //   <img className="round-img my-1" src={avatar} alt="" />

    //   <h1 className="large">John Doe</h1>
    // <p className="lead">Developer at Microsoft</p>
    // <p>Seattle, WA</p>
    // <div className="icons my-1">
    //   <a href="#">
    //     <i className="fas fa-globe fa-2x"></i>
    //   </a>
    //   <a href="#">
    //     <i className="fab fa-twitter fa-2x"></i>
    //   </a>
    //   <a href="#">
    //     <i className="fab fa-facebook fa-2x"></i>
    //   </a>
    //   <a href="#">
    //     <i className="fab fa-linkedin fa-2x"></i>
    //   </a>
    //   <a href="#">
    //     <i className="fab fa-instagram fa-2x"></i>
    //   </a>
    // </div>
    // </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
