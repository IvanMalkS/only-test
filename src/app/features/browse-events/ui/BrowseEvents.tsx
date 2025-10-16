import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';

import { EventCard } from 'entities/event';
import { Event } from 'entities/time-period/model/types';
import { ArrowButton } from 'shared/ui/ArrowButton';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './BrowseEvents.module.scss';

interface BrowseEventsProps {
  events: Event[];
}

export const BrowseEvents: React.FC<BrowseEventsProps> = ({ events }) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (sliderContainerRef.current) {
      const slides = sliderContainerRef.current.querySelectorAll('.swiper-slide');
      gsap.set(slides, { opacity: 0, y: 50 });

      gsap.to(slides, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
      });
    }
  }, []);

  return (
    <div className={styles.browserEventsContainer} ref={sliderContainerRef}>
      <Swiper
        className={styles.eventSlider}
        modules={[Navigation, Pagination]}
        slidesPerView={'auto'}
        spaceBetween={25}
        loop={false}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
        }}
        navigation={{
          nextEl: `.${styles.buttonNext}`,
          prevEl: `.${styles.buttonPrev}`,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 80,
          },
        }}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
          bulletClass: `swiper-pagination-bullet ${styles.bullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.bulletActive}`,
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <EventCard year={event.year} size={event.size} description={event.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}></div>
        <ArrowButton direction="prev" arrowType="secondary" className={styles.buttonPrev} />
        <ArrowButton direction="next" arrowType="secondary" className={styles.buttonNext} />
      </div>
    </div>
  );
};
