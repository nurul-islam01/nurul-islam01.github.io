import React from 'react';
import { object } from 'prop-types';

import styles from './skill.module.css';

const Skill = ({ skill }) => {
  const { name, percent } = skill;
  return (
    <div className={styles.base}>
      <div className={styles['skill-name']}>
        <h4>{name}</h4>
        <span>{percent}%</span>
      </div>
      <div className={styles.bar}>
        <div style={{ width: percent + '%' }} className={styles.progress}></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: object
};

export default Skill;
