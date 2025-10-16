import  { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { timelineData } from 'entities/time-period/model/data';
import { TimePeriodDates } from 'entities/time-period/ui/TimePeriodDates';
import { BrowseEvents } from 'features/browse-events';
import { SwitchTimePeriod } from 'features/switch-time-period'; 
import styles from './TimelineBlock.module.scss';
import clsx from 'clsx';
import { ArrowButton } from 'app/shared/ui/ArrowButton';

export const TimelineBlock = () => {
  const totalPeriods = timelineData.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const currentPeriod = timelineData[activeIndex];

  const startDateRef = useRef<HTMLSpanElement>(null);
  const endDateRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  const handleNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, totalPeriods - 1));
  };
  
  useEffect(() => {
    gsap.fromTo(
      [startDateRef.current, endDateRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, [activeIndex]);


  
return (
    <section className={clsx(styles.timelineBlock)} ref={containerRef}>

          <h1 className={styles.title}>Исторические даты</h1>
          <TimePeriodDates
            startRef={startDateRef}
            endRef={endDateRef}
            startDate={currentPeriod.dateRange.start}
            endDate={currentPeriod.dateRange.end}
          />

          <SwitchTimePeriod
            periods={timelineData}
            activeIndex={activeIndex}
            onSelectPeriod={setActiveIndex}
          />
          <div className={styles.controls}>
            <div className={styles.paginationFraction}>
              {String(activeIndex + 1).padStart(2, '0')}/{String(totalPeriods).padStart(2, '0')}
            </div>
            <div className={styles.controlsButtons}>
              <ArrowButton
                direction="prev"
                onClick={handlePrev}
                className={styles.navButton}
                disabled={activeIndex === 0}
              />
              <ArrowButton
                direction="next"
                onClick={handleNext}
                className={styles.navButton}
                disabled={activeIndex === totalPeriods - 1}
              />
            </div>
      </div>
      
      <BrowseEvents key={currentPeriod.id} events={currentPeriod.events} />
    </section>
  );
};