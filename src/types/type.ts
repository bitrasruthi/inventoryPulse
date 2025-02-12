export interface ClientOptions {
  label: string;
  value: string | number;
}

export interface TimeSlot {
  id: number;
  name: string;
  startTime: number;
  duration: number
}
export interface CalendarProps {
  resources: TimeSlot[];
}