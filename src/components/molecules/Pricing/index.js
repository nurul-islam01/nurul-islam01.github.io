import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';

import styles from './pricing.module.css';
import Link from 'next/link';

const Pricing = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Pricing" />
      <div className={styles.pricing}>
        <div className={styles.item}>
          <h3>Free</h3>
          <p>First bug fix!</p>
          <p>After Maximum 10$ for a ISSUE.</p>

          <Link href="/contact">Try Free</Link>
        </div>
        <div className={styles.item}>
          <h3>Basic</h3>
          <p>First Project maximum 100$</p>
          <p>After Maximum 1000$ or negotiable.</p>
          <p>Delivery within 1 month</p>
          <Link href="/contact">Try Free</Link>
        </div>
        <div className={styles.item}>
          <h3>Full Time Job</h3>
          <p>Maximum 1000$ or negotiable.</p>
          <Link href="/contact">Try Free</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
