import React from "react";
import { Grid, Typography, Box, Grid2 } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { format, parse } from "date-fns";

interface DateTimeCardProps {
  date: string;
  time: string;
}

const DateTimeCard: React.FC<DateTimeCardProps> = ({ date, time }) => {
  const parsedDate = parse(date, "dd MMM yyyy", new Date());
  const mainDate = format(parsedDate, "dd");
  const year = format(parsedDate, "MMM yyyy");

  return (
    <Box textAlign="center" sx={{ width: "110px" }}>
      <Box
        sx={{
          background: "#fde9b4",
          borderRadius: 2,
          boxShadow: 3,
          color: "#000",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "roboto-bold",
            fontSize: "42px",
            fontWeight: "bold",
            lineHeight: 1,
            display: "block",
          }}
        >
          {mainDate}
        </Typography>

        <Typography
          sx={{
            fontFamily: "roboto-bold",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {year}
        </Typography>
      </Box>

      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 1, gap: 1 }}
      >
        <AccessTimeFilledIcon sx={{ fontSize: "16px", color: "primary" }} />
        <Typography
          sx={{
            fontFamily: "roboto-bold",
            fontSize: "14px",
            fontWeight: "600",
            color: "primary",
          }}
        >
          {time}
        </Typography>
      </Grid2>
    </Box>
  );
};

export default DateTimeCard;
