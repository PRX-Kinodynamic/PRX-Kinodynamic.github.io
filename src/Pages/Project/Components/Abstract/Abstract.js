import React from 'react';

import styles from './Abstract.module.scss';
import htmlParse from "html-react-parser";

function Abstract({abstract}) {
  return (
    <div className={styles.abtractContainer}>
      <div className={styles.title}>
        Abstract
      </div>
      <div className={styles.abstractText}>
        {htmlParse(abstract)}
      </div>
    </div>
  );
}

Abstract.propTypes = {};

export default Abstract;