import React from 'react';

import styles from './Base.module.scss';

import NavBar from "../../Components/NavBar";
import Routes from "./routes";

function Base(props) {
  const contentContainerRef = React.useRef(null);
  
  return (
    <>
      <NavBar/>
      <div className={styles.contentContainer} ref={contentContainerRef}>
        <Routes contentContainerRef={contentContainerRef} />
      </div>
      
    </>
  );
}

Base.propTypes = {};

export default Base;