import React from 'react';
import cx from 'classnames';

import styles from './Video.module.scss';

function Video({videoURL, subtitlesURL, thumbnailURL, youtubeEmbedURL, name}) {
  
  const renderHTMLVideo = () => (
    <video
      className={styles.video}
      controls
      preload="auto"
      poster={thumbnailURL}
    >
      <source
        src={videoURL}
        type="video/mp4"/>
      <source
        src={videoURL}
        type="video/ogg"/>
      <track
        label="English"
        kind="subtitles"
        srcLang="en"
        src={subtitlesURL}
        default
      />
      Your browser does not support HTML video.
    </video>
  
  );
  
  const renderYoutube = () => (
    <iframe
      className={styles.youtube}
      src={youtubeEmbedURL}
      title={name}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
  
  if (!!youtubeEmbedURL) return renderYoutube();
  if (!!videoURL) return renderHTMLVideo();
  return null;
}

Video.propTypes = {};

export default Video;