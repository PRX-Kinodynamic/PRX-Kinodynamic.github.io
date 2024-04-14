import React  from 'react';
import config from 'config';

import {useRouteMatch} from "react-router-dom";


import Abstract from "./Components/Abstract";
import Authors from "./Components/Authors";
import Links from "./Components/Links";
import Video from "./Components/Video";

import styles from './Project.module.scss';
import Title from "./Components/Title";

function Project(props) {
  const match = useRouteMatch();
  const projectId = match.params.projectId;
  
  const projectDetails = config.projects[projectId];
  
  return (
    <div className={styles.container}>
      <Title name={projectDetails.name}/>
      <Authors
        authors={projectDetails.authors}
        equalContributors={projectDetails.equalContributors}
        showDepartments={projectDetails.showDepartments}
        showInstituteByNumber={projectDetails.showInstituteByNumber}
      />
      <Links links={projectDetails.links}/>
      <Abstract abstract={projectDetails.abstract}/>
      <Video {...projectDetails.videoDetails}/>
    </div>
  );
}

Project.propTypes = {};

export default Project;