import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface FieldsetProps {
  title?: ReactNode;
  children: ReactNode;
}

const Fieldset = ({ title, children, ...props }: FieldsetProps) => {
  return (
    <Box
      component="fieldset"
      sx={{
        borderColor: "#E0E0E0",
        borderWidth: 1,
        borderRadius: "10px",
        padding: 3,
      }}
      {...props}
    >
      {title && (
        <Typography
          component="legend"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            paddingX: 2,
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};
export default Fieldset;
