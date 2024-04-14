import React from 'react';

import config from 'config';

import _map from "lodash/map";

import styles from './Links.module.scss';

const LINK_TYPES = [
  {
    name: 'Paper',
    key: 'paperURL',
    logoURLKey: 'paperLogoURL',
    className: styles.paper
  },
  {
    name: 'arXiv',
    key: 'arxivURL',
    logoURLKey: 'arxivLogoURL'
  },
  {
    name: 'Code',
    key: 'codeURL',
    logoURLKey: 'githubLogoURL'
  },
  
]

function Links({links}) {
  const renderLink = ({ name, key, logoURLKey }) => {
    if (!links[key]) return null
    return (
      <a
        href={links[key]}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        key={key}
      >
        <img
          src={config[logoURLKey]}
          className={styles.linkLogo}
          alt={name}
        />
        {name}
      </a>
    )
  }
  
  return (
    <div className={styles.linksContainer}>
      {_map(LINK_TYPES, renderLink)}
    </div>
  );
}

Links.propTypes = {};
export default Links;