import moment from "moment";

export const momentDateFormatUtil = (date: any) => {
  if (date) {
    return moment(date).isValid() ? moment(date).format("DD MMM YYYY") : "";
  }
};
