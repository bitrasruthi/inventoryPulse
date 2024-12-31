import {
  Typography,
  Select,
  OutlinedSelectProps,
  SelectChangeEvent,
  MenuItem,
  styled,
} from "@mui/material";
import React from "react";

interface IProps extends OutlinedSelectProps {
  value: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
  handleSelect: (selectedValue: string) => void;
  selectedValue: string;
}

const StyledSelect = styled(Select<string>)(({ theme }) => ({
  height: 30,
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8542E9",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8542E9",
  },
}));

const SelectField: React.FC<IProps> = (props) => {
  const { options, handleSelect, selectedValue } = props;

  const handleChange = (event: SelectChangeEvent) => {
    handleSelect(event.target.value);
  };

  return (
    <>
      <Typography>Field</Typography>
      <StyledSelect
        {...props}
        fullWidth
        displayEmpty
        value={selectedValue}
        onChange={handleChange}
      >
        {options?.map((option) => (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default SelectField;
