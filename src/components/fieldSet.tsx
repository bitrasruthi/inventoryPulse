import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface FieldsetProps {
  title?: ReactNode;
  children: ReactNode;
}

const Fieldset = ({ title, children, ...props }: FieldsetProps) => {
  return (
    <Box pb={2} mb={2}>
      <Box
        sx={{
          borderColor: "#E0E0E0",
          borderWidth: 1,
          borderRadius: "10px",
          padding: 3,
          position: "relative",
        }}
        {...props}
      >
        {title && (
          <Typography
            component="legend"
            className="roboto-black"
            sx={{
              fontSize: "1.2rem",
              paddingX: 2,
              position: "absolute",
              top: "-15px",
              backgroundColor: "white",
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
};
export default Fieldset;
