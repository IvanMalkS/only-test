import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          nextEl: `.${styles.buttonNext}`,
          prevEl: `.${styles.buttonPrev}`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard year={event.year} description={event.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <ArrowButton direction="prev" className={styles.buttonPrev} />
      <ArrowButton direction="next" className={styles.buttonNext} />
    </div>
  );
};