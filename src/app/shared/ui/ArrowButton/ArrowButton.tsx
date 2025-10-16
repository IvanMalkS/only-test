import React from 'react';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, className, ...props }) => {
  const buttonClassName = clsx(
    styles.arrowButton,
    {
      [styles.next]: direction === 'next',
    },
    className
  );
  return (
    <button className={buttonClassName} {...props}>
      <img src="/arrow.svg" alt={`arrow ${direction}`} />
    </button>
  );
};