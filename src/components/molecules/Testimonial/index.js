import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SectionTitle from '@/components/atoms/SectionTitle';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './testimonial.module.css';

const testimonials = [
  {
    image: '/img/testimonials/testimonial-1.jpg',
    text: 'Exceptional talent! His Full Stack Node.js expertise transformed our project. Seamless collaboration, timely delivery, and an unparalleled commitment to excellence.',
    name: 'Emily Thompson',
    location: 'Vancouver, BC'
  },
  {
    image: '/img/testimonials/testimonial-2.jpg',
    text: 'A true professional in RESTful API development. Delivered a scalable solution with precision and creativity. Highly recommend for any complex backend requirements.',
    name: 'James MacDonald',
    location: 'Toronto, ON'
  },
  {
    image: '/img/testimonials/testimonial-3.jpg',
    text: "Master of databases! From MongoDB to SQL, his meticulous database management ensured our data's security and performance. A reliable partner for any data-centric project.",
    name: 'Ryan Johnston',
    location: 'Calgary, AB'
  }
];

const Testimonial = () => {
  return (
    <section className={`${styles.base} content`}>
      <SectionTitle title="Testimonials" />
      <div className={styles.testimonials}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 15
            }
          }}
          modules={[Pagination]}
        >
          {testimonials.map(({ image, text, name, location }, i) => (
            <SwiperSlide key={i}>
              <div className={styles.item}>
                <div className={styles['item-base']}>
                  <div className={styles['item-container']}>
                    <div className={styles['item-image']}>
                      <Image src={image} alt={name} height={80} width={80} />
                    </div>
                    <p>{text}</p>
                    <div className={styles.user}>
                      <h5>{name}</h5>
                      <p>{location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
