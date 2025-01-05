import { Select, MenuItem, BaseSelectProps, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LabelCommon from "./labelCommon";

interface IProps extends BaseSelectProps {
  options: { label: string; value: string }[];
  isNotBoldText?: boolean;
  marginBottom?: number;
}

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 10,
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
}));

const SelectField: React.FC<IProps> = (props) => {
  const { options, required, label, isNotBoldText, marginBottom } = props;

  return (
    <Box mb={marginBottom}>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledSelect
        {...props}
        fullWidth
        displayEmpty
        size="small"
        label={""}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: isNotBoldText ? "roboto-regular" : "roboto-bold",
          },
        }}
      >
        {options?.map((option) => (
          <MenuItem key={option?.value} value={option?.value}>
            {option?.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default SelectField;
