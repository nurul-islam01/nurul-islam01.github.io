import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import styles from './intro.module.css';
import Link from 'next/link';

const swipers = [
  'Fullstack-developer',
  'React-developer',
  'Next.js-developer',
  'Next.js-developer',
  'Angular-developer',
  'Express-developer'
];

const Intro = () => (
  <section className={`${styles.base} content`}>
    <div className={styles.wrapper}>
      <div className={styles['image-wrapper']}></div>
      <div className={styles['intro-info']}>
        <Swiper
          slidesPerView={1}
          className={styles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          {swipers.map((sw, i) => (
            <SwiperSlide key={i}>
              <h3 className={styles['swiper-item']}>{sw}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className={styles.name}>Nurul Islam</h1>
        <p className={styles.description}>
          I am a passionate Full Stack Node.js developer, dedicated to crafting
          seamless and efficient web solutions. With expertise in both front-end
          and back-end technologies, I bring creativity and technical prowess to
          every project I undertake.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} href="/">
            Download CV
          </Link>
          <Link className={styles.button} href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
