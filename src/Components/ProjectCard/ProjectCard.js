import React from 'react';

import styles from './ProjectCard.module.scss';
import {useHistory} from "react-router-dom";
import htmlParse from "html-react-parser";
import { ReactComponent as RedirectSvg } from "./redirect.svg";

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
  
  const renderRedirectLogo = () => (
    <RedirectSvg
      className={styles.redirectLogo}
    />
  );
  
  
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.title}>
        {htmlParse(projectDetails.name)}
      </div>
      {imageURL && renderImage()}
      {should_redirect && renderRedirectLogo()}
    </div>
  );
}

ProjectCard.propTypes = {};

export default ProjectCard;