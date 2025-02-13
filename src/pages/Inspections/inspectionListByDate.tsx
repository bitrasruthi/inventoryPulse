import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import theme from "../../styles/theme";
import { InspectionColorEnum } from "../../constants/enum";

interface Event {
  id: number;
  startTime: string;
  duration: number;
  inspectionType: string;
  address: string;
}

interface Props {
  FormattedDate: string;
}

const InspectionListByDate: React.FC<Props> = ({ FormattedDate }) => {
  const todayEvents: Event[] = [
    {
      id: 1,
      startTime: "11:30 am",
      duration: 30,
      inspectionType: "Check In",
      address: "115-116, Beaverbrook Town House Sloane St, London SW16 9PJ, UK",
    },
    {
      id: 2,
      startTime: "10:15 am",
      duration: 45,
      inspectionType: "Inventory & Check In",
      address: "115-116, Beaverbrook Town House Sloane St, London SW16 9PJ, UK",
    },
    {
      id: 3,
      startTime: "05:10 pm",
      duration: 30,
      inspectionType: "Check Out",
      address: "115-116, Beaverbrook Town House Sloane St, London SW16 9PJ, UK",
    },
  ];
  const HoverCard = ({ event }: { event: Event }) => {
    const [hover, setHover] = useState(false);

    return (
      <Box
        sx={{
          mb: 2,
          position: "relative",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box
          sx={{
            content: '""',
            position: "absolute",
            opacity: 0.3,
            backgroundColor: getColor(event.inspectionType),
            borderRadius: "2px",
            my: 2,
            width: 7,
            left: 0,
            top: 0,
            bottom: 0,
          }}
        ></Box>
        <Box sx={{ pl: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
                        justifyContent: "space-between",
              
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "roboto-bold" }}>
              {event.startTime}{" "}
              <Typography
                component="span"
                sx={{
                  fontFamily: "roboto-bold",
                  color: theme.palette.primary.main,
                }}
              >
                {event.inspectionType}
              </Typography>
            </Typography>
            <Box
              sx={{
                pr: 2,
                opacity: hover ? 1 : 0,
              }}
            >
              <IconButton>
                <EastIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="h6">{event.duration}min</Typography>
          <Typography variant="body1">{event.address}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <ContentWrapper>
      <Typography variant="h5" sx={{ fontFamily: "roboto-bold", mb: 1 }}>
        {FormattedDate}
      </Typography>
      {todayEvents.map((event) => (
        <HoverCard key={event.id} event={event} />
      ))}
    </ContentWrapper>
  );
};

const getColor = (type: string) => {
  switch (type) {
    case "Check In":
      return InspectionColorEnum.Green;
    case "Inventory & Check In":
      return InspectionColorEnum.Orange;
    case "Check Out":
      return InspectionColorEnum.Blue;
    default:
      return "gray";
  }
};

export default InspectionListByDate;
