import React from 'react';
import styles from './ArrowButton.module.scss';
import ArrowIcon from './arrow.svg';

interface ArrowButtonProps {
  direction: 'prev' | 'next';
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, className }) => {
  return (
    <button className={`${styles.arrowButton} ${styles[direction]} ${className}`}>
      <img src={ArrowIcon} alt={`arrow ${direction}`} />
    </button>
  );
};