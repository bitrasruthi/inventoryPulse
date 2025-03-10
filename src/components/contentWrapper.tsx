import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingX?: number;
  paddingY?: number;
}

const ContentWrapper: React.FC<Props> = ({
  children,
  paddingX = 2,
  paddingY = 3,
}) => {
  return (
    <Box
      sx={{
        px: paddingX,
        py: paddingY,
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
