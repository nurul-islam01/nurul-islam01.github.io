import React from 'react';

import Education from '@/components/molecules/Education';
import Certificates from '@/components/molecules/Certificates';
import Skills from '@/components/molecules/Skills';

import PageTitle from '@/components/atoms/PageTitle';

import styles from './resume.module.css';

const Resume = () => {
  return (
    <div className={styles.base}>
      <PageTitle headline="Resume" subheadline="5 Years Job Experience" />
      <Education />
      <Certificates />
      <Skills />
    </div>
  );
};

export default Resume;
