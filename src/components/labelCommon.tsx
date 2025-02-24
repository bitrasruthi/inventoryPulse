import { Box, Typography } from "@mui/material";
import React from "react";
import InfoIconWithTooltip from "./infoIconWithTooltip";

interface IProps {
  fieldName: React.ReactNode;
  isRequired?: boolean;
  fontSize?: string;
  fontFamily?: string;
  hasInfoIcon?: boolean;
}

const LabelCommon: React.FC<IProps> = (props) => {
  const {
    fieldName,
    isRequired,
    fontSize = "16px",
    fontFamily,
    hasInfoIcon,
  } = props;
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Typography
        sx={{
          fontSize: fontSize,
          fontFamily: fontFamily || "roboto-regular",
          pr: 1,
        }}
      >
        {fieldName}
        {isRequired && <span style={{ color: "red" }}> * </span>}
      </Typography>
      {hasInfoIcon && <InfoIconWithTooltip title={"Tooltip text for info"} />}
    </Box>
  );
};

export default LabelCommon;
