import moment from "moment";
import { StepperStepEnum } from "../constants/enum";

export const momentDateFormatUtil = (date: any) => {
  if (date) {
    return moment(date).isValid() ? moment(date).format("DD MMM YYYY") : "";
  }
};

export const momentTimeFormatUtil = (time: any) => {
  if (time) {
    return moment(time).isValid() ? moment(time).format("hh:mm") : "";
  }
};

export const getBtnTextByCurrentStep = (step: number) => {
  switch (step) {
    case StepperStepEnum.PropertyDetails:
      return "Create Property";
    case StepperStepEnum.InspectionDetails:
      return "Add Inspection";
    case StepperStepEnum.Schedule:
      return "Schedule";
    case StepperStepEnum.Contacts:
      return "Close";
    default:
      break;
  }
};

export const hexToRgba = (hex: string, alpha: number) => {
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
