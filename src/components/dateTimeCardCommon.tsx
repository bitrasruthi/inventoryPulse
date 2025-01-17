import React from "react";
import { Grid2, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { format, parse } from "date-fns";

interface DateTimeCardProps {
  date: string;
  time: string;
}

const DateTimeCard: React.FC<DateTimeCardProps> = (props) => {
  const { date, time } = props;

  const parsedDate = parse(date, "dd MMM yyyy", new Date());
  const mainDate = format(parsedDate, "dd MMM");
  const year = format(parsedDate, "yyyy");

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100px",
        background: `linear-gradient(180deg, ${"#B2EBCC"} 65%, ${"#80D2A6"} 35%)`,
        borderRadius: 2,
        boxShadow: 3,
        color: "#000",
      }}
    >
      <Typography
        sx={{
          fontFamily: "roboto-bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {mainDate}
      </Typography>
      <Typography
        sx={{
          fontFamily: "roboto-regular",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {year}
      </Typography>
      <Grid2 container alignItems="center" justifyContent="center">
        <AccessTimeIcon sx={{ fontSize: "14px" }} />
        <Typography
          variant="body1"
          component="span"
          sx={{ fontSize: "14px", paddingY: "2px" }}
        >
          {time}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default DateTimeCard;
