import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  fieldName: React.ReactNode;
  isRequired?: boolean;
  fontSize?: string;
  fontFamily?: string;
}

const LabelCommon: React.FC<IProps> = (props) => {
  const { fieldName, isRequired, fontSize = "16px", fontFamily } = props;
  return (
    <Typography
      sx={{ fontSize: fontSize, fontFamily: fontFamily || "roboto-regular" }}
    >
      {fieldName}
      {isRequired && <span style={{ color: "red" }}> * </span>}
    </Typography>
  );
};

export default LabelCommon;
