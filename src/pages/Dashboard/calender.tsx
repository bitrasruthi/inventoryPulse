import { useEffect, useRef, useState } from "react";
import { format, addHours, startOfDay } from "date-fns";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import theme from "../../styles/theme";

const resources = [
  { id: 1, name: "Resource 1", startTime: 7, duration: 0.5 },
  { id: 2, name: "Resource 2", startTime: 8.5, duration: 0.5 },
  { id: 3, name: "Resource 3", startTime: 9, duration: 0.5 },
  { id: 4, name: "Resource 4", startTime: 9, duration: 0.75 },
  { id: 4, name: "Resource 4", startTime: 7, duration: 1.5 },
];
const startHour = 7;
const endHour = 20;

const generateTimeSlots = () => {
  const slots = [];
  let currentTime = addHours(startOfDay(new Date()), startHour);
  for (let i = startHour; i <= endHour; i++) {
    slots.push({
      time: format(currentTime, "h a"),
      hour: i,
    });
    currentTime = addHours(currentTime, 1);
  }
  return slots;
};

const timeSlots = generateTimeSlots();

const Calendar = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [shadow, setShadow] = useState(false);
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        setShadow(tableContainerRef.current.scrollLeft > 0);
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const calculateColSpan = (startTime, duration) => {
    const durationMinutes = duration * 60;
    return Math.ceil(durationMinutes / 60);
  };

  const calculateWidthPercentage = (duration) => {
    const durationMinutes = duration * 60;
    return (durationMinutes / 60) * 100;
  };

  const calculateLeftOffsetPercentage = (startTime) => {
    const startMinutes = (startTime % 1) * 60;
    return (startMinutes / 60) * 100;
  };

  return (
    <TableContainer
      ref={tableContainerRef}
      component={Paper}
      elevation={0}
      sx={{
        border: 0,
        overflowX: "auto",
        position: "relative",
        borderRadius: 2,
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                borderRight: "1px solid #dbdbdb",
                minWidth: 200,
                position: "sticky",
                left: 0,
                top: 0,
                zIndex: 3,
                backgroundColor: "white",
                boxShadow: shadow
                  ? "8px 0px 10px -2px rgba(0,0,0,0.1)"
                  : "none",
              }}
            >
              <Typography className="roboto-medium">Name</Typography>
            </TableCell>
            {timeSlots.map((slot, index) => (
              <TableCell
                key={index}
                align="center"
                sx={{
                  fontWeight: "bold",
                  borderRight: "1px solid #dbdbdb",
                  minWidth: 220,
                  zIndex: 1,
                }}
              >
                <Typography className="roboto-medium">
                  {slot.time.toLocaleLowerCase()}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resources.map((resource) => {
            const endTime = resource.startTime + resource.duration;
            const colSpan = calculateColSpan(
              resource.startTime,
              resource.duration
            );
            const widthPercentage = calculateWidthPercentage(resource.duration);
            const leftOffsetPercentage = calculateLeftOffsetPercentage(
              resource.startTime
            );
            const startFormatted = format(
              addHours(startOfDay(new Date()), resource.startTime),
              resource.startTime % 1 === 0.75
                ? "h:45 a"
                : resource.startTime % 1 === 0.5
                ? "h:30 a"
                : resource.startTime % 1 === 0.25
                ? "h:15 a"
                : "h a"
            );

            const endFormatted = format(
              addHours(startOfDay(new Date()), endTime),
              endTime % 1 === 0.75
                ? "h:45 a"
                : endTime % 1 === 0.5
                ? "h:30 a"
                : endTime % 1 === 0.25
                ? "h:15 a"
                : "h a"
            );

            return (
              <TableRow
                key={resource.id}
                sx={{
                  backgroundColor:
                    selectedId === resource.id ? "#FFECB3" : "inherit",
                }}
                onClick={() => setSelectedId(resource.id)}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    borderRight: "1px solid #dbdbdb",
                    position: "sticky",
                    left: 0,
                    zIndex: 2,
                    backgroundColor:
                      selectedId === resource.id ? "#FFECB3" : "white",
                    boxShadow: shadow
                      ? "8px 0px 10px -2px rgba(0,0,0,0.1)"
                      : "none",
                  }}
                >
                  {resource.name}
                </TableCell>
                {timeSlots.map((slot, index) => {
                  if (slot.hour === Math.floor(resource.startTime)) {
                    return (
                      <TableCell
                        key={index}
                        align="center"
                        //colSpan={colSpan}
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: `${leftOffsetPercentage}%`,
                            width: `${widthPercentage}%`,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {`${startFormatted.toLocaleLowerCase()} - ${endFormatted.toLocaleLowerCase()}`}
                        </div>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      key={index}
                      style={{
                        borderRight: "1px solid #dbdbdb",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: "50%",
                          borderLeft: "1px dotted rgba(0,0,0,0.2)",
                        }}
                      ></div>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Calendar;
