import { TextField, Typography } from "@mui/material";
import React from "react";

interface Props {
  HeaderText?: string;
  value?: any;
  id?: string;
  label?: string;
  type?: string;
  onChange?: any;
  helperText?: any;
  placeholder?: string | any;
  error?: any;
  autoComplete?: string;
  minRows?: number;
  maxRows?: number;
  multiline?: boolean;
  required?: boolean;
  textFieldClassName?: string;
  variant?: any;
  disabled?: boolean;
  role?: boolean;
  readOnly?: any;
}

const TextFieldCommon: React.FC<Props> = ({
  HeaderText,
  value,
  id,
  label,
  type,
  onChange,
  helperText,
  placeholder,
  required,
  error,
  autoComplete,
  minRows,
  maxRows,
  multiline,
  textFieldClassName,
  variant,
  disabled,
  role,
  ...rest
}) => {
  return (
    <>
      <Typography className={textFieldClassName ? textFieldClassName : ""}>
        {HeaderText}
      </Typography>
      <TextField
        type={type}
        required={required}
        value={value}
        id={id}
        multiline={multiline}
        minRows={minRows ? minRows : ""}
        maxRows={maxRows ? maxRows : ""}
        onChange={onChange}
        autoComplete={autoComplete}
        error={error}
        helperText={helperText ? helperText : " "}
        label={label}
        placeholder={placeholder}
        variant={variant ? variant : "outlined"}
        fullWidth
        disabled={disabled}
        size="small"
        color="primary"
        {...rest}
      />
    </>
  );
};

export default TextFieldCommon;
