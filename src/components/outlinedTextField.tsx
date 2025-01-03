import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import LabelCommon from "./labelCommon";

interface IProps extends OutlinedTextFieldProps {
  StartAdormentIcon?: React.ElementType;
  EndAdormentIcon?: React.ElementType;
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiInputBase-input": {
      fontWeight: 600,
    },
  },
}));

const OutlinedTextField: React.FC<IProps> = (props) => {
  const { StartAdormentIcon, EndAdormentIcon, label, required } = props;
  return (
    <>
      <LabelCommon fieldName={label} isRequired={required} />
      <StyledTextField
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
    </>
  );
};

export default OutlinedTextField;
