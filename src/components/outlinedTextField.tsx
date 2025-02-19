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
import useDebounce from "../hooks/UseDebounce";

interface IProps extends OutlinedTextFieldProps {
  startAdormentIcon?: React.ElementType;
  endAdormentIcon?: React.ElementType;
  isnotboldtext?: boolean;
  formProps?: UseFormRegisterReturn;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    child: React.ReactNode
  ) => void;
  value: string;
}

export const StyledTextField = styled(TextField)<{ props?: IProps }>(
  ({ theme, props }) => ({
    "& .MuiInputBase-root": {
      paddingLeft: 2,
      paddingRight: 2,
      fontFamily: props?.isnotboldtext ? "roboto-regular" : "roboto-bold",
      borderRadius: 10,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
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
    handleChange,
    value,
  } = props;

  const [selectedValue, setSelectedValue] = useState<string | number>("");
  const debouncedValue = useDebounce(selectedValue, 2000);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (handleChange) {
      const event = {
        target: { value: debouncedValue },
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(event, debouncedValue);
    }
  }, [debouncedValue]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box pb={type === "pagination" ? 0 : 2} width={"100%"}>
      <LabelCommon fieldName={label} isRequired={required} />

      <StyledTextField
        props={props}
        fullWidth
        size="small"
        {...props}
        label={""}
        value={selectedValue}
        onChange={handleOnChange}
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
