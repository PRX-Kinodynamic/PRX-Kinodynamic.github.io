import React from 'react';

import _map from 'lodash/map';

import config from 'config';

import styles from './Home.module.scss';
import ProjectCard from "../../Components/ProjectCard";

function Home(props) {
  return (
    <div>
      <div className={styles.projectsHeading}>Projects</div>
      <div className={styles.projectList}>
        {
          _map(config.projects, (projectDetails, projectId) => (
            <ProjectCard projectDetails={projectDetails} key={projectId}/>
          ))
        }
      </div>
      
    </div>
  );
}

Home.propTypes = {};

export default Home;