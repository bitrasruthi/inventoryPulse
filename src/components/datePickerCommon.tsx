import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface IProps extends DatePickerProps<Date> {}

const DatePickerCommon: React.FC<IProps> = (props) => {
  const {} = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker {...props} />
      </LocalizationProvider>
    </>
  );
};

export default DatePickerCommon;
