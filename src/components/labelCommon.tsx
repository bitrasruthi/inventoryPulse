import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  fieldName: React.ReactNode;
  isRequired?: boolean;
}

const LabelCommon: React.FC<IProps> = (props) => {
  const { fieldName, isRequired } = props;
  return (
    <>
      <Typography>
        {fieldName}
        {isRequired && <span style={{ color: "red" }}> * </span>}
      </Typography>
    </>
  );
};

export default LabelCommon;
