import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LabelCommon from "./labelCommon";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps extends OutlinedTextFieldProps {
  startAdormentIcon?: React.ElementType;
  endAdormentIcon?: React.ElementType;
  isnotboldtext?: boolean;
  formProps?: UseFormRegisterReturn;
}

export const StyledTextField = styled(TextField)<{ props?: IProps }>(
  ({ theme, props, error }) => ({
    "& .MuiInputBase-root": {
      paddingLeft: 2,
      paddingRight: 2,
      fontFamily: props?.isnotboldtext ? "roboto-regular" : "roboto-bold",
      borderRadius: 5,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: !error
          ? theme.palette.primary.main
          : theme.palette.error.main,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: !error
          ? theme.palette.primary.main
          : theme.palette.error.main,
      },
    },
  })
);

const OutlinedTextField: React.FC<IProps> = (props) => {
  const {
    startAdormentIcon: StartAdormentIcon,
    endAdormentIcon: EndAdormentIcon,
    label,
    required,
    type,
    formProps,
  } = props;

  return (
    <Box pb={type === "pagination" ? 0 : 2} width={"100%"}>
      <LabelCommon fieldName={label} isRequired={required} />

      <StyledTextField
        props={props}
        fullWidth
        size="small"
        {...props}
        label={""}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {StartAdormentIcon && (
                  <IconButton
                    disableFocusRipple
                    disableRipple
                    sx={{ padding: 0, pl: 1 }}
                  >
                    <StartAdormentIcon fontSize="small" />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {EndAdormentIcon && (
                  <IconButton
                    disableFocusRipple
                    disableRipple
                    sx={{ padding: 0 }}
                  >
                    <EndAdormentIcon fontSize="small" />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          },
        }}
        {...formProps}
      />
    </Box>
  );
};

export default OutlinedTextField;
