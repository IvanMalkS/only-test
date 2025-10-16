import React from 'react';
import styles from './EventCard.module.scss';
import clsx from 'clsx';
interface EventCardProps {
  year: number | string;
  description: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const EventCard: React.FC<EventCardProps> = ({ year, description, size = 'small'  }) => {
  const cardClassName = clsx(
    styles.card,
    size && styles[size]
  );
  
  return (
    <div className={cardClassName}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};