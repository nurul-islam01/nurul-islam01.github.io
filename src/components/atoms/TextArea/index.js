import React from 'react';

import styles from './text-area.module.css';

const TextArea = ({ ...ops }) => <textarea className={styles.base} {...ops} />;

export default TextArea;
