import React from 'react';
import styles from './EventCard.module.scss';

interface EventCardProps {
  year: number | string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({ year, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};