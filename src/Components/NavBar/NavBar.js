import React from 'react';

import styles from './NavBar.module.scss';

function NavBar(props) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          PRACSYS Lab - Kinodynamic Group
        </div>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;