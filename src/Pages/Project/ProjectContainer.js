import {useRouteMatch} from "react-router-dom";

import _has from "lodash/has";

import Project from "./Project";

import config from "../../config";

import styles from './Project.module.scss';

function ProjectContainer () {
  const match = useRouteMatch();
  const projectId = match.params.projectId;
  
  if (_has(config.projects, projectId)) return <Project projectId={projectId}/>;
  
  return (
    <div className={styles.noSuchProjectContainer}>
      <h1>404</h1>
      <h1>Page not found</h1>
    </div>
  );
}

export default ProjectContainer;