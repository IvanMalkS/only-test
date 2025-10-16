import React from 'react';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import { ArrowButtonProps } from '../model/types';

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  className,
  arrowType = 'primary',
  ...props
}) => {
  const buttonClassName = clsx(
    styles.arrowButton,
    styles[arrowType],
    direction === 'prev' ? styles.prev : styles.next,
    className,
  );
  return (
    <button className={buttonClassName} {...props}>
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </button>
  );
};
