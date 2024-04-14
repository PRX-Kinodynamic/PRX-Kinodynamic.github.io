import React from 'react';

import htmlParse from "html-react-parser";

import styles from './Title.module.scss';

function Title({name}) {
  return (
    <div className={styles.title}>
        {htmlParse(name)}
    </div>
  );
}

Title.propTypes = {};

export default Title;