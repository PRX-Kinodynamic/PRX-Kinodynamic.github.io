import React, {useEffect} from 'react';

import {useRouteMatch} from "react-router-dom";

import Abstract from "./Components/Abstract";
import Authors from "./Components/Authors";
import Links from "./Components/Links";
import Video from "./Components/Video";
import Title from "./Components/Title";

import {stripHTML} from "../../helpers";

import styles from './Project.module.scss';

import config from 'config';
import BibTeX from "./Components/BibTeX";

function Project(props) {
  const match = useRouteMatch();
  const projectId = match.params.projectId;
  
  const projectDetails = config.projects[projectId];
  
  useEffect(() => {
    document.title = stripHTML(projectDetails.name);
  }, [projectDetails.name]);
  
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
      <Video {...projectDetails.videoDetails} name={projectDetails.name}/>
      <Abstract abstract={projectDetails.abstract}/>
      <BibTeX bibtex={projectDetails.bibtex}/>
    </div>
  );
}

Project.propTypes = {};

export default Project;