import {
  Select,
  MenuItem,
  BaseSelectProps,
  Box,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import LabelCommon from "./labelCommon";

interface IProps extends BaseSelectProps {
  options: { label: string; value: string | number }[] | string[];
  isnotboldtext?: boolean;
  marginBottom?: number;
  helperText?: React.ReactNode;
  value?: string | number;
  onChange?: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
}

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 5,
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
}));

const SelectField: React.FC<IProps> = ({
  options,
  required,
  label,
  isnotboldtext,
  marginBottom,
  type,
  helperText,
  value,
  onChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    const newValue = event.target.value as string | number;
    setSelectedValue(newValue);

    onChange?.(event, newValue);
  };

  return (
    <Box mb={marginBottom} pb={type === "pagination" ? 0 : 2} width={"100%"}>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledSelect
        {...props}
        fullWidth
        displayEmpty
        size="small"
        value={selectedValue}
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: isnotboldtext ? "roboto-regular" : "roboto-bold",
          },
        }}
        renderValue={(selected: any) => (selected ? selected : "Please Select")}
      >
        {options?.map((option, index) => {
          const isObject = typeof option === "object";
          return (
            <MenuItem
              key={index}
              value={isObject ? option.value : option}
              sx={{ fontFamily: "roboto-regular !important" }}
            >
              {isObject ? option.label : option}{" "}
            </MenuItem>
          );
        })}
      </StyledSelect>
      <FormHelperText sx={{ fontSize: 12, color: "#FF1744" }}>
        {helperText}
      </FormHelperText>
    </Box>
  );
};

export default SelectField;
