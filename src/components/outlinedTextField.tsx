import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface IProps extends OutlinedTextFieldProps {
  StartAdormentIcon?: React.ElementType;
  EndAdormentIcon?: React.ElementType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: 30,
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8542E9",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8542E9",
    },
  },
}));

const OutlinedTextField: React.FC<IProps> = (props) => {
  const { StartAdormentIcon, EndAdormentIcon } = props;
  return (
    <>
      <Typography>Field</Typography>
      <StyledTextField
        fullWidth
        {...props}
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
