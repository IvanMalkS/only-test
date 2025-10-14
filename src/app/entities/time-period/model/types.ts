export interface Event {
    year: number | string;
    description: string;
  }
  
  export interface TimePeriod {
    id: number;
    title: string;
    dateRange: {
      start: number;
      end: number;
    };
    events: Event[];
  }