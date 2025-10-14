import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { timelineData } from 'entities/time-period/model/data';
import { TimePeriodDates } from 'entities/time-period/ui/TimePeriodDates';
import { SwitchTimePeriod } from 'features/switch-time-period';
import { BrowseEvents } from 'features/browse-events';
import styles from './TimelineBlock.module.scss';

export const TimelineBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPeriod = timelineData[activeIndex];

  const startDateRef = useRef<HTMLSpanElement>(null);
  const endDateRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(
      [startDateRef.current, endDateRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, [activeIndex]);
  
  return (
    <section className={styles.timelineBlock}>
      <h1 className={styles.title}>Исторические даты</h1>
      
      <SwitchTimePeriod
        periods={timelineData}
        activeIndex={activeIndex}
        onSelectPeriod={setActiveIndex}
      />

      <TimePeriodDates
        startRef={startDateRef}
        endRef={endDateRef}
        startDate={currentPeriod.dateRange.start}
        endDate={currentPeriod.dateRange.end}
      />
      

      <BrowseEvents events={currentPeriod.events} />
    </section>
  );
};