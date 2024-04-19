import React from 'react';

import styles from './ProjectCard.module.scss';
import {useHistory} from "react-router-dom";
import htmlParse from "html-react-parser";
import {stripHTML} from "../../helpers";

function ProjectCard({projectDetails}) {
  const {
    should_redirect,
    urlSuffix,
    imageURL,
    url,
  } = projectDetails;
  
  const history = useHistory();
  
  const handleClick = () => {
    if (should_redirect){
      window.open(url, "_blank")
    }
    else{
      history.push(urlSuffix)
    }
    
  }
  
  const renderImage = () => (
    <img
      src={imageURL}
      alt=""
      className={styles.image}
    />
  );
  
  
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.title}>
        {htmlParse(projectDetails.name)}
      </div>
      {imageURL && renderImage()}
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;