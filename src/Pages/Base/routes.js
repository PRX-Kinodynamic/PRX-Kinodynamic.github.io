import {Route, Switch} from "react-router-dom";
import React from "react";
import Content from "../Content";
import Morals from "../Morals";

function Routes(props) {
  return (
    <Switch>
      <Route path="/morals">
        <Morals />
      </Route>
      <Route path="/morals">
        <Morals />
      </Route>
      <Route path="/">
        <Content />
      </Route>
    </Switch>
  );
}

export default Routes;