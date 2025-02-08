import React, { useEffect, useRef, useState } from "react";
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
  Box,
} from "@mui/material";
import theme from "../../styles/theme";

const resources = [
  { id: 1, name: "Resource 2", startTime: 7, endTime: 9 },
  { id: 2, name: "Resource 2", startTime: 8.5, endTime: 9 },
  { id: 3, name: "Resource 3", startTime: 8, endTime: 11 },
  { id: 4, name: "Resource 4", startTime: 12, endTime: 14 },
  { id: 5, name: "Resource 4", startTime: 14, endTime: 13 },
  { id: 6, name: "Resource 4", startTime: 14, endTime: 18 },
];
const startHour = 7;
const endHour = 20;

const generateTimeSlots = () => {
  const slots = [];
  let currentTime = addHours(startOfDay(new Date()), startHour);
  for (let i = startHour; i <= endHour; i++) {
    slots.push({ time: format(currentTime, "h a"), hour: i });
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

    const container: any = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
                minWidth: 170,
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
                  minWidth: 170,
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
          {resources.map((resource) => (
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
                if (slot.hour === resource.startTime) {
                  const spanHours = resource.endTime - resource.startTime + 1;
                  return (
                    <TableCell
                      key={index}
                      align="center"
                      colSpan={spanHours}
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: 8,
                        borderRight: 0,
                      }}
                    >
                      {`${format(
                        addHours(startOfDay(new Date()), resource.startTime),
                        "h a"
                      )} - ${format(
                        addHours(startOfDay(new Date()), resource.endTime),
                        "h a"
                      )}`}
                    </TableCell>
                  );
                }
                return slot.hour > resource.startTime &&
                  slot.hour < resource.endTime ? null : (
                  <TableCell
                    key={index}
                    style={{ borderRight: "1px solid #dbdbdb" }}
                  ></TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Calendar;
