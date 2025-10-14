import React, { RefObject } from 'react';
interface TimePeriodDatesProps {
    startDate: number;
    endDate: number;
    startRef: RefObject<HTMLSpanElement>;
    endRef: RefObject<HTMLSpanElement>;
  }
  export const TimePeriodDates: React.FC<TimePeriodDatesProps> = ({ startDate, endDate, startRef, endRef }) => {
    return (
      <div>
        <span ref={startRef}>{startDate}</span>
        {' '}
        <span ref={endRef}>{endDate}</span>
      </div>
    );
  };