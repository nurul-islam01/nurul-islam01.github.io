import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './education.module.css';

const eductions = [
  {
    year: '2017',
    campus: 'Institute of Science and Technology',
    certificate: 'Computer Science and Engineering',
    text: 'Computer Science and Engineering graduate with a passion for problem-solving and innovation. Excited to apply my skills in creating cutting-edge solutions for real-world challenges.'
  },
  {
    year: '2012',
    campus: 'Altajar Rahman Degree College',
    certificate: 'Higher Secondary Certificate',
    text: 'Science graduate since 2012, bringing a decade of experience and a foundation in critical thinking to tackle challenges in diverse domains.'
  },
  {
    year: '2010',
    campus: 'Zangalia School and College',
    certificate: 'Secondary School Certificate',
    text: 'Completed SSC in Science in 2010, I bring over 10 years of experience, combining analytical skills with a strong scientific background.'
  }
];

const experiences = [
  {
    year: '2021 - Current',
    company: 'Prothom Alo',
    designation: 'Senior Fullstack developer',
    text: "I've been working with Prothom Alo, contributing as a Fullstack developer. Excited about the dynamic projects and continuous growth in the ever-evolving tech landscape."
  },
  {
    year: '2019 - 2021',
    company: 'Nassa Group',
    designation: 'Web and Android App Developer',
    text: 'I served here as a Web and Android App Developer, honing my skills in crafting digital solutions for a diverse range of platforms'
  },
  {
    year: '2018',
    company: 'Wizdoor',
    designation: 'Junior App developer',
    text: 'Starting my live from this company, in here i was work on also a web and android app developer.'
  }
];

const Education = () => {
  return (
    <section className={styles.base}>
      <div className={styles.education}>
        <SectionTitle title="Education" />
        <div className={styles.items}>
          {eductions.map(({ year, campus, certificate, text }, i) => (
            <div className={styles.item} key={i}>
              <div className={styles['item-head']}>
                <h5>{year}</h5>
                <span>{campus}</span>
              </div>
              <h4>{certificate}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.experience}>
        <SectionTitle title="Experience" />
        <div className={styles.items}>
          {experiences.map(({ year, company, designation, text }, i) => (
            <div className={styles.item} key={i}>
              <div className={styles['item-head']}>
                <h5>{year}</h5>
                <span>{company}</span>
              </div>
              <h4>{designation}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
