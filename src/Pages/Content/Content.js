import React, {useEffect} from 'react';
import { withRouter } from "react-router-dom";

import _map from 'lodash/map';

import config from 'config';

import styles from './Content.module.scss';
import ProjectCard from "../../Components/ProjectCard";

function Content(props) {
  const {history, match} = props
  
  return (
    <div>
      <div className={styles.projectsHeading}>Projects</div>
      <div className={styles.projectList}>
        {
          _map(config.projects, (projectDetails) => (
            <ProjectCard projectDetails={projectDetails} key={projectDetails.id}/>
          ))
        }
      </div>
      
    </div>
  );
}

Content.propTypes = {};

export default withRouter(Content);