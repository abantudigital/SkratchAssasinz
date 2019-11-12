import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer className="uk-secondary">
        <h3>
          <b>FOOTER</b>
        </h3>
        <p>
          Contact information:{" "}
          <a href="mailto:someone@example.com">someone@example.com</a>.
        </p>
      </footer>
    </Fragment>
  );
}
