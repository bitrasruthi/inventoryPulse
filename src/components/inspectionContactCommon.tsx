import { Phone } from "@mui/icons-material";
import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "../assets/icons/phoneIcon";
import EmailIcon from "../assets/icons/emailIcon";

interface IProps {
  name: string;
  phoneNo: string;
  email: string;
}

const InspectionContactCommon: React.FC<IProps> = (props) => {
  const { name, phoneNo, email } = props;

  return (
    <Box mb={2}>
      <Typography
        sx={{
          fontFamily: "Roboto-bold",
          fontSize: "18px",
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PhoneIcon fill={"#8542E9"} width="18" height="18" />
        <Typography>{phoneNo}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon fill={"#8542E9"} width="18" height="18" />
        <Typography>{email}</Typography>
      </Box>
    </Box>
  );
};

export default InspectionContactCommon;
