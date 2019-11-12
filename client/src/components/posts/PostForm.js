// POST FORM
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <fieldset className="uk-fieldset">
        <div className="post-form">
          <div>
            <h3>Say Something...</h3>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addPost({ text });
              setText("");
            }}
          >
            <textarea
              name="text"
              className="uk-textarea"
              rows="5"
              placeholder="Create a post"
              value={text}
              onChange={e => setText(e.target.value)}
            ></textarea>
            <input
              className="uk-button uk-button-primary"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </fieldset>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
