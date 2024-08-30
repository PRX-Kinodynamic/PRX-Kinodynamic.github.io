import React from 'react';
import PropTypes from 'prop-types';
import htmlParse from "html-react-parser";

import styles from './ProjectContent.module.scss';

function ProjectContent({content}) {
  return (
    <div className={styles.container}>
        {htmlParse(content)}
    </div>
  );
}

ProjectContent.propTypes = {};

export default ProjectContent;