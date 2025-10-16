import { TimePeriod } from 'app/entities/time-period';

export interface SwitchTimePeriodProps {
  periods: TimePeriod[];
  activeIndex: number;
  onSelectPeriod: (index: number) => void;
}
