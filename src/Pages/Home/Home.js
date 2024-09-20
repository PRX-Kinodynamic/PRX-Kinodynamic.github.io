import React, {useMemo} from 'react';

import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';
import _size from 'lodash/size';

import config from 'config';

import styles from './Home.module.scss';
import ProjectCard from "../../Components/ProjectCard";

function Home(props) {
  const projects = useMemo(() => {
      const projectsToDisplay = _filter(config.projects, ({unpublished}) => !unpublished);
      return _sortBy(projectsToDisplay, ({sortKey}) => -(sortKey || 100));
  }, []);
  
  const preprints = useMemo(() => {
    return _filter(projects, ({preprint}) => !!preprint);
  }, [projects]);
  
  const publications = useMemo(() => {
    return _filter(projects, ({preprint}) => !preprint);
  }, [projects]);
  
  return (
    <div className={styles.container}>
      {!!_size(preprints) && (
        <>
          <div className={styles.projectsHeading}>Pre-Prints</div>
          <div className={styles.projectList}>
            {
              _map(preprints, (projectDetails, projectId) => (
                <ProjectCard projectDetails={projectDetails} key={projectId}/>
              ))
            }
          </div>
        </>
      )}
      <div className={styles.projectsHeading}>Publications</div>
      <div className={styles.projectList}>
        {
          _map(publications, (projectDetails, projectId) => (
            <ProjectCard projectDetails={projectDetails} key={projectId}/>
              ))
            }
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;