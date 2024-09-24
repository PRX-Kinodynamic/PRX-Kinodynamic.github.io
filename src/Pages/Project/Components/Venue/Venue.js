import React from 'react';
import cx from 'classnames';

import styles from './Venue.module.scss';

function Venue({venue}) {
  const isPreprint = !venue;
  
  const handleClick = () => {
      if (!venue?.url) return;
      
      window.open(venue.url, '_blank');
  }
  
  const renderVenue = () => {
    const {name, url, imageURL} = venue;
    return (
      <>
        Proceedings of
        <div className={cx(styles.venue, {[styles.link]: !!url})} onClick={handleClick}>
          {imageURL &&
            <img src={imageURL} alt={name} className={styles.image}/>
          }
          {name}
        </div>
      </>
    )
  }
  
  const renderUnderReview = ()  => (
    <div>
      Under Review
    </div>
  );
  
  return (
    <div className={styles.venueContainer}>
      {isPreprint ? renderUnderReview() : renderVenue()}
    </div>
  );
}

Venue.propTypes = {};

export default Venue;