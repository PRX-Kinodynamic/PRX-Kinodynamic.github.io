import Base from "./Pages/Base";

import styles from './App.module.scss';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className={styles.App}>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Kinodynamic Group | PRACSYS Lab</title>
        <meta
          name="description"
          content="Kinodynamic Group of PRACSYS Lab, Rutgers University. Research in Kinodynamic Motion Planning for Mobile Robots."
        />
        <link rel="canonical" href="https://prx-kinodynamic.github.io/"/>
      </Helmet>
      <Base/>
    </div>
  );
}

export default App;
