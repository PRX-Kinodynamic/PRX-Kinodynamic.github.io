import React from 'react';
import cx from 'classnames';

import config from 'config';

import styles from './NavBar.module.scss';

function NavBar(props) {
  return (
    <div className={styles.container}>
      <img
        src={config.pracsysLogoURL}
        className={cx(styles.logo, styles.pracsysLogo)}
        alt={'PRACSYS Lab'}
      />
      <img
        src={config.pracsysRutgersLogoURL}
        className={cx(styles.logo, styles.pracsysRutgersLogo)}
        alt={'PRACSYS Lab | Rutgers University'}
      />
      <div className={styles.title}>
        Kinodynamic Group
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