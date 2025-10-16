import React from 'react';
import styles from './TimePeriodDates.module.scss';
import { TimePeriodDatesProps } from '../model/types';

export const TimePeriodDates: React.FC<TimePeriodDatesProps> = ({
  startDate,
  endDate,
  startRef,
  endRef,
}) => {
  return (
    <div className={styles.timePeriodDates}>
      <span ref={startRef} className={styles.startDate}>
        {startDate}
      </span>
      <span ref={endRef} className={styles.endDate}>
        {endDate}
      </span>
    </div>
  );
};
