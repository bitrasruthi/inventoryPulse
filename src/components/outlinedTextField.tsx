import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import LabelCommon from "./labelCommon";

interface IProps extends OutlinedTextFieldProps {
  startAdormentIcon?: React.ElementType;
  endAdormentIcon?: React.ElementType;
  isnotboldtext?: boolean;
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 10,
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const OutlinedTextField: React.FC<IProps> = (props) => {
  const {
    startAdormentIcon: StartAdormentIcon,
    endAdormentIcon: EndAdormentIcon,
    label,
    required,
    isnotboldtext,
    type,
  } = props;
  return (
    <Box pb={type === "pagination" ? 0 : 2} width={"100%"}>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledTextField
        fullWidth
        size="small"
        {...props}
        label={""}
        sx={{
          "& .MuiInputBase-input": {
            fontFamily: isnotboldtext ? "roboto-regular" : "roboto-bold",
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {StartAdormentIcon && (
                  <IconButton
                    disableFocusRipple
                    disableRipple
                    sx={{ padding: 0 }}
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
      />
    </Box>
  );
};

export default OutlinedTextField;
