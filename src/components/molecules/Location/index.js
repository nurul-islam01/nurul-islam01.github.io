import React from 'react';

import styles from './location.module.css';

const Location = () => (
  <section className={styles.base}>
    <iframe
      allowFullScreen=""
      className="google-map-frame"
      height="450"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7303.720254231927!2d90.3909809!3d23.7523668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702658132678!5m2!1sen!2sbd"
      style={{ border: 0 }}
      width="100%"
    ></iframe>
  </section>
);

export default Location;
