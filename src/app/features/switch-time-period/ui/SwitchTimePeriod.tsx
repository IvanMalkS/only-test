import React from 'react';
import { TimePeriod } from 'entities/time-period/model/types';
interface SwitchTimePeriodProps {
    periods: TimePeriod[];
    activeIndex: number;
    onSelectPeriod: (index: number) => void;
  }
  export const SwitchTimePeriod: React.FC<SwitchTimePeriodProps> = ({ periods, activeIndex, onSelectPeriod }) => {
    // Пока просто выведем информацию, чтобы убедиться, что props дошли
    return (
      <div>
        <p>Круговая навигация</p>
        <p>Активный индекс: {activeIndex}</p>
        {/* Пример интерактивности */}
        <button onClick={() => onSelectPeriod(0)}>Выбрать 1</button>
        <button onClick={() => onSelectPeriod(1)}>Выбрать 2</button>
      </div>
    );
  };