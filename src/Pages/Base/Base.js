import React from 'react';

import styles from './Base.module.scss';

import NavBar from "../../Components/NavBar";
import Routes from "./routes";

function Base(props) {
  return (
    <>
      <NavBar/>
      <div className={styles.contentContainer}>
        <Routes />
      </div>
      
    </>
  );
}

Base.propTypes = {};

export default Base;