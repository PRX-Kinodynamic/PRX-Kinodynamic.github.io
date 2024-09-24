import React, {useEffect} from 'react';

import Abstract from "./Components/Abstract";
import Authors from "./Components/Authors";
import Links from "./Components/Links";
import Video from "./Components/Video";
import Title from "./Components/Title";

import {stripHTML} from "../../helpers";

import styles from './Project.module.scss';

import config from 'config';
import BibTeX from "./Components/BibTeX";
import Venue from "./Components/Venue";
import ProjectContent from "./Components/ProjectContent";

function Project({projectId}) {
  
  const projectDetails = config.projects[projectId];
  
  useEffect(() => {
    document.title = stripHTML(projectDetails.name);
  }, [projectDetails.name]);
  
  return (
    <div className={styles.container}>
      <Title name={projectDetails.name}/>
      {projectDetails.authors && <Authors
        authors={projectDetails.authors}
        equalContributors={projectDetails.equalContributors}
        showDepartments={projectDetails.showDepartments}
        showInstituteByNumber={projectDetails.showInstituteByNumber}
      />}
      {<Venue venue={projectDetails.venue}/>}
      {projectDetails.links && <Links links={projectDetails.links}/>}
      {projectDetails.videoDetails && <Video {...projectDetails.videoDetails} name={projectDetails.name}/>}
      {projectDetails.abstract && <Abstract abstract={projectDetails.abstract}/>}
      {projectDetails.bibtex && <BibTeX bibtex={projectDetails.bibtex}/>}
      {projectDetails.content && <ProjectContent content={projectDetails.content}/>}
    </div>
  );
}

Project.propTypes = {};

export default Project;