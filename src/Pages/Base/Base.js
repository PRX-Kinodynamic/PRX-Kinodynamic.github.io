import React from 'react';
import PropTypes from 'prop-types';

import styles from './Base.module.scss';
import NavBar from "../../Components/NavBar";
import Content from "../Content";
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