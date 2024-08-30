import React, {useMemo} from 'react';

import _map from 'lodash/map';
import _filter from 'lodash/filter';
import _sortBy from 'lodash/sortBy';

import config from 'config';

import styles from './Home.module.scss';
import ProjectCard from "../../Components/ProjectCard";

function Home(props) {
  const projects = useMemo(() => {
      const projectsToDisplay = _filter(config.projects, ({unpublished}) => !unpublished);
      return _sortBy(projectsToDisplay, ({sortKey}) => -(sortKey || 100));
  }, []);
  
  return (
    <div>
      <div className={styles.projectsHeading}>Publications</div>
      <div className={styles.projectList}>
        {
          _map(projects, (projectDetails, projectId) => (
            <ProjectCard projectDetails={projectDetails} key={projectId}/>
          ))
        }
      </div>
      
    </div>
  );
}

Home.propTypes = {};

export default Home;