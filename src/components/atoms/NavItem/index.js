import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './nav-item.module.css';

export default function NavItem({ nav }) {
  const { url, name, label } = nav;
  const router = useRouter();
  const { pathname } = router;

  return (
    <li className={`${styles.base}`}>
      <Link
        className={`${styles.link} ${pathname === url ? styles['active'] : ''}`}
        href={url}
        aria-label="about page link"
      >
        {name}
      </Link>
    </li>
  );
}
