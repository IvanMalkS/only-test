export interface Event {
    year: number | string;
    description: string;
    size?: 'small'| 'medium' | 'large';
  }
  
interface DateRange {
  start: number;
  end: number;
}
export interface TimePeriod {
  id: number;
  title: string;
  dateRange: DateRange
  events: Event[];
}