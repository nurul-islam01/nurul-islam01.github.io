import React from 'react';

import styles from './input.module.css';

const Input = ({ ...opt }) => <input className={styles.base} {...opt} />;

export default Input;
