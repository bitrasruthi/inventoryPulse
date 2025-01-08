import { Select, MenuItem, BaseSelectProps, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import LabelCommon from "./labelCommon";

interface IProps extends BaseSelectProps {
  options: { label: string; value: string }[];
  isnotboldtext?: boolean;
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
  const { options, required, label, isnotboldtext, marginBottom, type } = props;

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
        {options?.map((option) => (
          <MenuItem
            key={option?.value}
            value={option?.value}
            sx={{ fontFamily: "roboto-regular !important" }}
          >
            {option?.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default SelectField;
