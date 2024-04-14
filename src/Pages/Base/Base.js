import React from 'react';

// import styles from './Base.module.scss';
import NavBar from "../../Components/NavBar";
import Routes from "./routes";

function Base(props) {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <Routes />
    </div>
  
  
  );
}

Base.propTypes = {};

export default Base;