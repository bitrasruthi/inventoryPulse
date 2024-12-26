import { Box } from "@mui/material";
import React from "react";

type Props = {};

const InspectionList = (props: Props) => {
  return (
    <Box
      sx={{
        height: "80vh !important",
        overflowY: "auto",
        p: 3,
      }}
    >
      <Box p={1}>InspectionList</Box>
    </Box>
  );
};

export default InspectionList;
