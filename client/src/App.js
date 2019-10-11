import React, { Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Contact from "./components/layout/Contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <section className="uk-container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
