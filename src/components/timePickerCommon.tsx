import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import theme from "../styles/theme";

interface IProps extends TimePickerProps<Date> {
  setSelectedTime: (time: Date | null) => void;
}

const TimePickerCommon: React.FC<IProps> = (props) => {
  const { setSelectedTime } = props;

  const handleChange = (value: Date | null) => {
    setSelectedTime(value);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
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

export default TimePickerCommon;
