import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import theme from "../styles/theme";

interface IProps extends DatePickerProps<Date> {
  setSelectedDate: (date: Date | null) => void;
}

const DatePickerCommon: React.FC<IProps> = (props) => {
  const { setSelectedDate } = props;

  const handleChange = (value: Date | null) => {
    setSelectedDate(value);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...props}
          onChange={handleChange}
          slotProps={{
            textField: {
              sx: {
                width: "100% !important",
                "& .MuiInputBase-root": {
                  height: 40,
                  borderRadius: "10px",
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePickerCommon;
