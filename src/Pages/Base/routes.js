import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import Home from "../Home";
import Project from "../Project";

function Routes(props) {
  return (
    <Switch>
      <Redirect exact from="/morals" to="/projects/morals" />
      <Route path="/projects/:projectId">
        <Project />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;