import { useState, useEffect, useRef } from 'react';
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

  const prevPeriodRef = useRef(currentPeriod);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => Math.min(prevIndex + 1, totalPeriods - 1));
  };

  useEffect(() => {
    const startDateEl = startDateRef.current;
    const endDateEl = endDateRef.current;

    if (!startDateEl || !endDateEl) return;

    const prevStartDate = prevPeriodRef.current.dateRange.start;
    const prevEndDate = prevPeriodRef.current.dateRange.end;
    const newStartDate = currentPeriod.dateRange.start;
    const newEndDate = currentPeriod.dateRange.end;

    const startCounter = { value: prevStartDate };
    const endCounter = { value: prevEndDate };

    const tl = gsap.timeline();

    tl.to(startCounter, {
      value: newStartDate,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        startDateEl.textContent = String(Math.round(startCounter.value));
      },
    }).to(
      endCounter,
      {
        value: newEndDate,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          endDateEl.textContent = String(Math.round(endCounter.value));
        },
      },
      '<'
    );

    prevPeriodRef.current = currentPeriod;
    
  }, [activeIndex, currentPeriod]);

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