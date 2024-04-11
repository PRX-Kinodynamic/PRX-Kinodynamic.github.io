import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectCard.module.scss';
import {useHistory} from "react-router-dom";

function ProjectCard({projectDetails}) {
  
  const history = useHistory();
  const handleClick = () => {
    if (projectDetails.redirect){
      window.location.href = window.location.origin + projectDetails.urlSuffix
    }
    else{
      history.push(projectDetails.urlSuffix)
    }
    
  }
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.title}>
        {projectDetails.name}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;