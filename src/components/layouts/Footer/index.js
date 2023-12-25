import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.base}>
      <div className={styles.social}>
        <a
          href="https://twitter.com/nurul_islam01"
          aria-label="twitter link nurul islam"
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com/nurul.islam001"
          aria-label="Facebook link nurul islam"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/__p_u_t_i__"
          aria-label="Instagram link nurul islam"
        >
          Instagram
        </a>
        <a
          href="https://github.com/nurul-islam01"
          aria-label="Github link nurul islam"
        >
          Github
        </a>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 All rights reserved. Nurul Islam.</p>
      </div>
    </footer>
  );
};

export default Footer;
