import React, {useMemo} from 'react';

import cx from 'classnames';

import _map from "lodash/map";
import _unique from "lodash/uniq";
import _size from "lodash/size";
import _includes from "lodash/includes";
import _reduce from "lodash/reduce";
import _isNil from "lodash/isNil";

import config from 'config';

import styles from './Authors.module.scss';

function Authors({authors, equalContributors, showDepartments, showInstituteByNumber}) {
  const authorsMetadata = config.authorsMetadata;
  const institutes = _unique(_map(authors, (author) => authorsMetadata[author].institute));
  
  const {authorInstituteNumbers, numberVsInstitute} = useMemo(() => {
    if (!showInstituteByNumber) return {};
    let number = 1;
    return _reduce(authors, (acc, author) => {
      const {authorInstituteNumbers: prevAuthorInstituteNumbers, instituteNumbers: prevInstituteNumbers, numberVsInstitute: prevNumberVsInstitute} = acc;
      const {institute, department} = authorsMetadata[author];
      
      if (!showDepartments) {
        if (!prevInstituteNumbers[institute]) {
          prevInstituteNumbers[institute] = number;
          prevNumberVsInstitute[number] = institute;
          number++;
        }
        prevAuthorInstituteNumbers[author] = prevInstituteNumbers[institute];
      }
      else {
        if (!prevInstituteNumbers[institute] || !prevInstituteNumbers[institute][department]) {
          prevInstituteNumbers[institute] = prevInstituteNumbers[institute] || {};
          prevInstituteNumbers[institute][department] = number;
          prevNumberVsInstitute[number] = [institute, department];
          number++;
        }
        prevAuthorInstituteNumbers[author] = prevInstituteNumbers[institute][department];
      }
      
      return acc;
    }, {authorInstituteNumbers:{}, instituteNumbers: {}, numberVsInstitute: {}});
  }, [authors, showDepartments, authorsMetadata, showInstituteByNumber]);
  
  const renderAuthors = () => {
    return (
      <div className={styles.authorList}>
        {_map(authors, renderAuthor)}
      </div>
    );
  }
  
  const renderAuthor = (author) => {
    const authorData = authorsMetadata[author]
    const isEqualContributor = _includes(equalContributors, author);
    return (
      <a
        href={authorData.url}
        className={styles.authorContainer}
        target="_blank"
        rel="noopener noreferrer"
        key={author}
      >
        <span className={styles.author}>
          {authorData.name}
        </span>
        {isEqualContributor ? "*" : ""}
        {showInstituteByNumber
          ? <sup className={styles.instituteNumber}>{authorInstituteNumbers[author]}</sup>
          : null
        }
      </a>
    );
  }
  
  const renderInstitutes = () => {
    if (!showInstituteByNumber) {
      return (
        <div className={cx(styles.instituteList)}>
          {_map(institutes, institute => renderInstitute(institute))}
        </div>
      );
    }
    
    if (!showDepartments) {
      return (
        <div className={styles.instituteList}>
          {_map(numberVsInstitute, (institute, number) => renderInstitute(institute, number))}
        </div>
      );
    }
    
    return (
      <div className={styles.instituteList}>
        {_map(numberVsInstitute, ([institute, department], number) => renderInstitute(institute, number, department))}
      </div>
    );
    
  }
  
  const renderInstitute = (institute, number=undefined, department=undefined) => {
    const {departments, shortName, longName} = config.institutes[institute];
    
    if (showDepartments && department) {
      return (
        <div className={styles.institute} key={institute}>
          {!_isNil(number) && showInstituteByNumber &&
            <sup className={styles.instituteNumber}>{number}</sup>
          }
          {departments[department].name}, {shortName}
        </div>
      );
    }
    return (
      <div className={styles.institute} key={institute}>
        {!_isNil(number) && showInstituteByNumber &&
          <sup className={styles.instituteNumber}>{number}</sup>
        }
        {longName}
      </div>
    );
  }
  
  return (
    <div className={styles.authorsContainer}>
      {renderAuthors()}
      {_size(equalContributors) > 1 && (<div>*Equal contribution</div>)}
      {renderInstitutes()}
    </div>
  );
}

Authors.propTypes = {};

export default Authors;