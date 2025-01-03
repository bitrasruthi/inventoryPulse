import { Select, MenuItem, BaseSelectProps } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LabelCommon from "./labelCommon";

interface IProps extends BaseSelectProps {
  options: { label: string; value: string }[];
}

const StyledSelect = styled(Select)(({ theme }) => ({
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiInputBase-input": {
    fontWeight: 600,
  },
}));

const SelectField: React.FC<IProps> = (props) => {
  const { options, required, label } = props;

  return (
    <>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledSelect {...props} fullWidth displayEmpty size="small" label={""}>
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
