import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import React, {useEffect, useLayoutEffect} from "react";
import Home from "../Home";
import Project from "../Project";

function Routes({contentContainerRef}) {
  const location = useLocation();
  const [homeScroll, setHomeScroll] = React.useState(0);
  const [prevPath, setPrevPath] = React.useState();

  useLayoutEffect(() => {
    if (location.pathname === "/") {
      contentContainerRef.current.scrollTo(0, homeScroll);
    }
    else {
      if (prevPath === "/") setHomeScroll(contentContainerRef.current.scrollTop);
      contentContainerRef.current.scrollTo(0, 0);
    }
    setPrevPath(location.pathname);
  }, [contentContainerRef, homeScroll, setHomeScroll, location.pathname]);
  
  return (
    <Switch>
      <Redirect exact from="/morals" to="/projects/morals"/>
      <Route path="/projects/:projectId">
        <Project/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default Routes;