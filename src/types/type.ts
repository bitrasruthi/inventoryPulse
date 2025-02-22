export interface ClientOptions {
  label: string;
  value: string | number;
}

export interface TimeSlot {
  id: number;
  name: string;
  startTime: number;
  duration: number;
}

export interface CalendarProps {
  resources: TimeSlot[];
}

export interface ClientTimeSlots {
  id: number;
  name: string;
  scheduledTimes: ScheduledTime[];
}

export interface ScheduledTime {
  startTime: number;
  duration: number;
}

export interface IconProps {
  width: string;
  height: string;
  fill?: string;
}
