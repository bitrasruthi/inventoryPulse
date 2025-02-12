import {
  Select,
  MenuItem,
  BaseSelectProps,
  Box,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LabelCommon from "./labelCommon";

interface IProps extends BaseSelectProps {
  options: { label: string; value: string | number }[];
  isnotboldtext?: boolean;
  marginBottom?: number;
  helperText?: React.ReactNode;
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
  const {
    options,
    required,
    label,
    isnotboldtext,
    marginBottom,
    type,
    helperText,
  } = props;

  return (
    <Box mb={marginBottom} pb={type === "pagination" ? 0 : 2} width={"100%"}>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledSelect
        {...props}
        fullWidth
        displayEmpty
        size="small"
        label={""}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: isnotboldtext ? "roboto-regular" : "roboto-bold",
          },
        }}
      >
        {options?.map((option, index) => (
          <MenuItem
            key={index}
            value={option?.value}
            sx={{ fontFamily: "roboto-regular !important" }}
          >
            {option?.label}
          </MenuItem>
        ))}
      </StyledSelect>
      <FormHelperText sx={{ fontSize: 12, color: "#FF1744" }}>
        {helperText}
      </FormHelperText>
    </Box>
  );
};

export default SelectField;
