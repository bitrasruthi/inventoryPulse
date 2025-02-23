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

export interface ISnackBarContextType {
  snackBarState: {
    snackbarMessage: string;
    snackbarSeverity: "success" | "error";
  };
  showSnackBar: (message: any, severity: "success" | "error") => void;
}

export interface IconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}
