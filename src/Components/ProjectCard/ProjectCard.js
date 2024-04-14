import React from 'react';

import styles from './ProjectCard.module.scss';
import {useHistory} from "react-router-dom";
import htmlParse from "html-react-parser";

function ProjectCard({projectDetails}) {
  
  const history = useHistory();
  const handleClick = () => {
    if (projectDetails.should_redirect){
      window.open(projectDetails.url, "_blank")
    }
    else{
      history.push(projectDetails.urlSuffix)
    }
    
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.title}>
        {htmlParse(projectDetails.name)}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;