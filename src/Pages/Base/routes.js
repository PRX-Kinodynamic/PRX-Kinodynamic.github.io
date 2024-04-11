import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Content from "../Content";
import Morals from "../Morals";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/morals">
          <Morals />
        </Route>
        <Route path="*">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;