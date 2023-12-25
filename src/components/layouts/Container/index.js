import React from 'react';
import { node } from 'prop-types';
import { Poppins } from 'next/font/google';

import Header from '@/components/layouts/Header';
import Title from '@/components/layouts/Title';
import Footer from '@/components/layouts/Footer';

import styles from './container.module.css';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap'
});

const Container = ({ children }) => {
  return (
    <main className={poppins.className}>
      <Title />
      <div className={styles.background} />
      <div className={styles.base}>
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </main>
  );
};

Container.propTypes = {
  children: node
};

export default Container;
