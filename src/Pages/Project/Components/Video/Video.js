import React, {useEffect} from 'react';


import styles from './Video.module.scss';

function Video({videoURL, subtitlesURL, thumbnailURL}) {
  const fetchSubtitles = async () => {};
  useEffect(() => {
    fetchSubtitles();
  }, []);
  return (
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
}

Video.propTypes = {};

export default Video;