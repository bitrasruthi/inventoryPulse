import { Avatar, Grid2 } from "@mui/material";
import React from "react";
import LabelValueCommon from "./labelValueCommon";

interface IProps {
  fieldName: string;
  value: React.ReactNode;
  type?: number;
}

const InspectionContactCommon: React.FC<IProps> = (props) => {
  const { fieldName, value, type } = props;

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    console.log({ color });

    return color;
  }

  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Grid2 container spacing={1}>
      <Grid2>
        <Avatar
          {...stringAvatar(fieldName)}
          sx={{
            width: 40,
            height: 40,
            backgroundColor: stringToColor(fieldName),
          }}
        />
      </Grid2>
      <Grid2>
        <LabelValueCommon
          fieldName={fieldName}
          value={value}
          type={type}
          fontSize={"16px"}
        />
      </Grid2>
    </Grid2>
  );
};

export default InspectionContactCommon;
