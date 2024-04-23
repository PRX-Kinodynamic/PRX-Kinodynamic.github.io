import React from 'react';
import cx from 'classnames';
import htmlParse from "html-react-parser";

import { ReactComponent as CopySvg } from "./copy.svg";

import styles from './BibTex.module.scss';

const parseBibTeX = (bibtex) => {
  const bibtexHtml = bibtex
    .replaceAll('\n', '<br/>')
    .replaceAll('\t', '&nbsp;&nbsp;&nbsp;&nbsp;');
  return htmlParse(bibtexHtml);
};


function BibTeX({bibtex}) {
  const [copyStatus, setCopyStatus] = React.useState();
  
  const handleClick = () => {
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => {
        setCopyStatus(undefined);
      }, 1000);
    }).catch(() => {
      setCopyStatus('Copy Failed!');
      setTimeout(() => {
        setCopyStatus(undefined);
      }, 1000);
    });
  }
  
  const renderCopyButton = () => (
    <div className={styles.copyButton}>
      <CopySvg
        className={styles.copyLogo}
      />
      Copy
    </div>
  )
  
  const renderCopied = () => <div className={styles.copied}>{copyStatus}</div>
  
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.title}>
                BibTeX
            </div>
            <div className={cx(styles.copyContainer, {[styles.showCopied]: !!copyStatus})} onClick={handleClick}>
              {renderCopied()}
              {renderCopyButton()}
            </div>
        </div>
      <div className={styles.bibtex}>
        {parseBibTeX(bibtex)}
      </div>
      
    </div>
  );
}

BibTeX.propTypes = {};

export default BibTeX;