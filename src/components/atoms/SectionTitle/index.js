import React from 'react';

import styles from './section-title.module.css';

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default SectionTitle;
