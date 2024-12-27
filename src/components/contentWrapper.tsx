import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingX?: number;
  paddingY?: number;
}

const ContentWrapper: React.FC<Props> = ({ children, paddingX, paddingY }) => {
  return (
    <Box
      sx={{
        height: "80vh !important",
        overflowY: "auto",
        px: paddingX,
        py: paddingY,
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
