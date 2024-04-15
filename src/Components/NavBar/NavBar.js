import React, {useState} from 'react';
import cx from 'classnames';

import config from 'config';

import styles from './NavBar.module.scss';
import {useHistory, useLocation} from "react-router-dom";

function NavBar(props) {
  const [isKinodynamicHovered, setIsKinodynamicHovered] = useState(false);
  const history = useHistory();
  
  const handleMouseEnter = () => {
    setIsKinodynamicHovered(true);
  }
  
  const handleMouseLeave = () => {
    setIsKinodynamicHovered(false);
  }
  
  const redirectToPRACSYS = () => window.location.assign(config.pracsysURL);
  
  return (
    <div className={styles.container}>
      <div className={cx(styles.pracsysContainer, {[styles.hover]: isKinodynamicHovered})}>
        <img
          src={config.pracsysLogoURL}
          className={cx(styles.logo, styles.pracsysLogo)}
          alt={'PRACSYS Lab'}
          onClick={redirectToPRACSYS}
        />
        <img
          src={config.pracsysRutgersLogoURL}
          className={cx(styles.logo, styles.pracsysLogo, styles.pracsysRutgersLogo)}
          alt={'PRACSYS Lab | Rutgers University'}
          onClick={redirectToPRACSYS}
        />
        
        <div
          className={styles.title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => history.push('/')}
        >
          Kinodynamic Group
        </div>
      
      </div>
      
      <img
        src={config.rutgersLogoURL}
        className={cx(styles.logo, styles.rutgersLogo)}
        alt={'Rutgers'}
      />
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;