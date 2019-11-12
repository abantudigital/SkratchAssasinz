import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div>
    <article className="uk-comment uk-comment-primary">
      <header
        className="uk-comment-header uk-grid-medium uk-flex-middle"
        uk-grid="true"
      >
        <div className="uk-width-auto">
          <img
            src={avatar}
            alt="images"
            className="uk-comment-avatar"
            width="80"
            height="80"
          />
        </div>
        <div className="uk-width-expand">
          <h4 className="uk-comment-title uk-margin-remove">
            <a className="uk-link-reset" href="#!">
              {name}
            </a>
          </h4>
          <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li>
              <p className="uk-text-meta">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{" "}
              </p>
            </li>
            <li>
              <a href="#!">Reply</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="uk-comment-body">{text}</div>
    </article>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
