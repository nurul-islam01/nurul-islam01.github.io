import React from 'react';
import Image from 'next/image';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './certificates.module.css';

const Certificates = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Certificates" />
      <div className={styles.certificates}>
        <div className={styles.certificate}>
          <div className={styles.image}>
            <Image
              src="/img/creative-it.png"
              alt="creative it"
              width={70}
              height={22}
            />
          </div>
          <div className={styles.content}>
            <h4>Web Development</h4>
            <p>Membership ID: SD-10397</p>
            <time>19 April 2017</time>
          </div>
        </div>
        <div className={styles.certificate}>
          <div className={styles.image}>
            <Image
              src="/img/seip.png"
              alt="creative it"
              width={70}
              height={24}
            />
          </div>
          <div className={styles.content}>
            <h4>Web Development</h4>
            <p>Membership ID: SD-10397</p>
            <time>19 April 2017</time>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
