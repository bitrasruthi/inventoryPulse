import { Tooltip } from "@mui/material";
import React, { FC } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface IProps {
  title: string;
}

const InfoIconWithTooltip: FC<IProps> = (props) => {
  const { title } = props;
  return (
    <>
      <Tooltip title={title}>
        <InfoOutlinedIcon sx={{ width: 18, height: 18 }} />
      </Tooltip>
    </>
  );
};

export default InfoIconWithTooltip;
