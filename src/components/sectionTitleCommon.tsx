import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  title: React.ReactNode;
}

const SectionTitleCommon: React.FC<IProps> = (props) => {
  const { title } = props;
  return (
    <Typography color="#694A96" fontSize={"16px"} fontFamily={"roboto-bold"}>
      {title}
    </Typography>
  );
};

export default SectionTitleCommon;
