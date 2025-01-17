import { Typography } from "@mui/material";
import React from "react";
import LabelCommon from "./labelCommon";

interface IProps {
  fieldName: React.ReactNode;
  value: React.ReactNode;
  type?: number;
  fontSize?: string;
}

const LabelValueCommon: React.FC<IProps> = (props) => {
  const { fieldName, value, type = 1, fontSize = "14px" } = props;
  return (
    <>
      {type === 1 && (
        <>
          <LabelCommon fieldName={fieldName} fontSize={fontSize} />
          <Typography
            sx={{
              fontFamily: "Roboto-bold",
              fontSize: { fontSize },
            }}
          >
            {value}
          </Typography>
        </>
      )}
      {type == 2 && (
        <>
          <Typography
            sx={{
              fontFamily: "Roboto-bold",
              fontSize: { fontSize },
            }}
          >
            {fieldName}
          </Typography>
          <LabelCommon fieldName={value} fontSize="14px" />
        </>
      )}
    </>
  );
};

export default LabelValueCommon;