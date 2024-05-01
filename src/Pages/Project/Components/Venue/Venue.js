import React from 'react';
import cx from 'classnames';

import styles from './Venue.module.scss';

function Venue({venue}) {
  const {name, url, imageURL} = venue;
  
  const handleClick = () => {
      if (!url) return;
      
      window.open(url, '_blank');
  }
  
  return (
    <div className={cx(styles.venue, {[styles.link]: !!url})} onClick={handleClick}>
      {imageURL ?
        <img src={imageURL} alt={name} className={styles.image}/> :
        name
      }
    </div>
  );
}

Venue.propTypes = {};

export default Venue;