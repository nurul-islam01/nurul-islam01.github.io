import React from 'react';

import PageTitle from '@/components/atoms/PageTitle';
import Location from '@/components/molecules/Location';
import Contacts from '@/components/molecules/Contacts';

import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.base}>
      <PageTitle headline="Contact" subheadline="Get in Touch" />
      <Location />
      <Contacts />
    </div>
  );
};

export default Contact;
