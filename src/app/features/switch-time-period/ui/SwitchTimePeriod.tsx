import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TimePeriod } from 'entities/time-period/model/types';
import styles from './SwitchTimePeriod.module.scss';
import clsx from 'clsx';
import { ArrowButton } from 'app/shared/ui/ArrowButton';

interface SwitchTimePeriodProps {
  periods: TimePeriod[];
  activeIndex: number;
  onSelectPeriod: (index: number) => void;
}

const CIRCLE_RADIUS = 265;
const ROTATION_OFFSET = -65;

export const SwitchTimePeriod: React.FC<SwitchTimePeriodProps> = ({ periods, activeIndex, onSelectPeriod }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const totalPeriods = periods.length;
  const activePeriod = periods[activeIndex];

  useEffect(() => {
    if (circleRef.current) {
      const rotationAngle = ROTATION_OFFSET - (360 / totalPeriods) * activeIndex;
      gsap.to(circleRef.current, {
        rotation: rotationAngle,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  }, [activeIndex, totalPeriods]);


  const activeAngleRad = ROTATION_OFFSET * (Math.PI / 180);
  const activeX = CIRCLE_RADIUS * Math.cos(activeAngleRad);
  const activeY = CIRCLE_RADIUS * Math.sin(activeAngleRad);

  return (
    <div className={styles.wrapper}>
        <div className={styles.circleContainer}>
        <div className={styles.circle} ref={circleRef}>
            {periods.map((period, index) => {
            if (index === activeIndex) return null;

            const angleRad = ((360 / totalPeriods) * index) * (Math.PI / 180);
            const x = CIRCLE_RADIUS * Math.cos(angleRad);
            const y = CIRCLE_RADIUS * Math.sin(angleRad);
            
            return (
                <div
                    key={period.id}
                    className={styles.dotWrapper}
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                    onClick={() => onSelectPeriod(index)}
                >
                <div className={styles.dot} />
                </div>
            );
            })}
        </div>

        <div 
            className={styles.activeDotContainer}
            style={{ transform: `translate(-50%, -50%) translate(${activeX}px, ${activeY}px)` }}
        >
            <div className={styles.activeLabel}>
            <span className={styles.activeLabelTitle}>{activePeriod.title}</span>
            </div>
            <div className={clsx(styles.dot, styles.active)}>
            <span className={styles.activeLabelIndex}>{activeIndex + 1}</span>
            </div>
        </div>
   
    </div>
         
    </div>
  );
};