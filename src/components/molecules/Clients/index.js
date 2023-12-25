import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SectionTitle from '@/components/atoms/SectionTitle';

import Palo from '../../../icons/palo-bangla.svg';
import PaloEng from '../../../icons/palo-english.svg';
import BigganChinta from '../../../icons/biggan-chinta.svg';
import KishorAlo from '../../../icons/kishoralo-white.svg';
import Nagorik from '../../../icons/nagorik.svg';
import Bondushava from '../../../icons/bondhushava.svg';

import styles from './clients.module.css';

const clients = [
  {
    url: 'https://www.prothomalo.com',
    label: 'Prothom alo',
    Icon: Palo
  },
  {
    url: 'https://en.prothomalo.com',
    label: 'Prothom alo English',
    Icon: PaloEng
  },
  {
    url: 'https://www.bigganchinta.com',
    label: 'Biggan chinta site',
    Icon: BigganChinta
  },
  {
    url: 'https://www.kishoralo.com',
    label: 'Kishor alo site',
    Icon: KishorAlo
  },
  {
    url: 'https://nagorik.prothomalo.com',
    label: 'Nagorik site',
    Icon: Nagorik
  },
  {
    url: 'https://www.bondhushava.com',
    label: 'Bondushava site',
    Icon: Bondushava
  }
];

const Clients = () => {
  return (
    <section className={styles.base}>
      <SectionTitle title="Clients" />
      <div className={styles.swiper}>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            834: {
              slidesPerView: 4,
              spaceBetween: 50
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50
            }
          }}
          modules={[Pagination]}
        >
          {clients.map(({ url, label, Icon }, i) => (
            <SwiperSlide key={i} className={styles.client}>
              <Link href={url} aria-label={label}>
                <Icon />
              </Link>
            </SwiperSlide>
          ))}
          <SwiperSlide className={styles.client}>
            <Link href="https://rajneete.com" aria-label="rajneete site">
              <Image
                width="141"
                height="40"
                src="/img/rajneete.png"
                alt="Rajneete"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
