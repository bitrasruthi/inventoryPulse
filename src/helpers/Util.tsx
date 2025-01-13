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
