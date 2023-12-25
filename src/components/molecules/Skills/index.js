import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './skills.module.css';
import Skill from '@/components/atoms/Skill';

const skills = [
  {
    name: 'Javascript, TypeScript',
    percent: 95
  },
  {
    name: 'Java',
    percent: 75
  },
  {
    name: 'Nodejs',
    percent: 85
  },
  {
    name: 'React, Angular',
    percent: 95
  },
  {
    name: 'React, NextJS',
    percent: 95
  },
  {
    name: 'Express',
    percent: 95
  },
  {
    name: 'MONGODB, SQL, Firebase',
    percent: 90
  },
  {
    name: 'Android with Java',
    percent: 75
  },
  {
    name: 'Webpack, GraphQL',
    percent: 90
  },
  {
    name: 'HTML, CSS, JQUERY, Tailwind, Bootstrap',
    percent: 98
  }
];

const Skills = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Coding Skills" />
      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
