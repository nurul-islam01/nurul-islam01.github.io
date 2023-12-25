import React from 'react';
import { string } from 'prop-types';

import styles from './page-title.module.css';

const PageTitle = ({ headline, subheadline }) => {
  return (
    <section className={styles.base}>
      <div className="content">
        <div className={styles.content}>
          <h1>{headline}</h1>
          <h4>{subheadline}</h4>
        </div>
      </div>
    </section>
  );
};

PageTitle.propTypes = {
  headline: string,
  subheadline: string
};

export default PageTitle;
