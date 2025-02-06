import React, { useState } from "react";
import { format, addHours, startOfDay } from "date-fns";
import { Typography } from "@mui/material";

const resources = [
  { id: 1, name: "Resource 1", startTime: 7.5, endTime: 8 },
  { id: 2, name: "Resource 2", startTime: 8, endTime: 9 },
  { id: 3, name: "Resource 3", startTime: 10, endTime: 11 },
  { id: 4, name: "Resource 4", startTime: 12, endTime: 14 },
  { id: 1, name: "Resource 1", startTime: 7.5, endTime: 8 },
  { id: 2, name: "Resource 2", startTime: 8, endTime: 9 },
  { id: 3, name: "Resource 3", startTime: 10, endTime: 11 },
  { id: 4, name: "Resource 4", startTime: 12, endTime: 14 },
  { id: 1, name: "Resource 1", startTime: 7.5, endTime: 8 },
  { id: 2, name: "Resource 2", startTime: 8, endTime: 9 },
  { id: 3, name: "Resource 3", startTime: 10, endTime: 11 },
  { id: 4, name: "Resource 4", startTime: 12, endTime: 14 },
  { id: 1, name: "Resource 1", startTime: 7.5, endTime: 8 },
  { id: 2, name: "Resource 2", startTime: 8, endTime: 9 },
  { id: 3, name: "Resource 3", startTime: 10, endTime: 11 },
  { id: 4, name: "Resource 4", startTime: 12, endTime: 14 },
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
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="w-full overflow-auto bg-white h-96">
      <div
        className="grid grid-cols-[150px_repeat(${timeSlots.length},minmax(80px,1fr))]"
        style={{
          gridTemplateColumns: `150px repeat(${timeSlots.length}, minmax(120px, 1fr))`,
        }}
      >
        {/* Header Row */}
        <Typography className="border p-2 font-extrabold sticky bg-gray-100">
          Name
        </Typography>
        {timeSlots.map((slot, index) => (
          <Typography
            key={index}
            className="border p-2 text-center font-extrabold bg-gray-100 sticky top-0"
          >
            {slot.time}
          </Typography>
        ))}
        {/* Resource Rows */}
        {resources.map((resource, rowIndex) => (
          <div
            key={rowIndex}
            className={`contents ${
              selectedId === resource.id ? "bg-orange-200 bg-opacity-30" : ""
            }`} // Highlight full row if selectedId matches
          >
            <Typography
              className={`border border-gray-300 p-2 bg-white font-extrabold sticky left-0 ${
                selectedId === resource.id ? "bg-orange-200 bg-opacity-30" : ""
              }`}
              onClick={() => setSelectedId(resource.id)} // Click to select resource
            >
              {resource.name}
            </Typography>
            {timeSlots.map((slot, colIndex) => {
              const isMiddleOfHour = slot.hour === Math.floor(slot.hour) + 0.5;

              const isInRange =
                slot.hour >= resource.startTime && slot.hour < resource.endTime;

              return (
                <div
                  key={colIndex}
                  className={`border ${
                    isMiddleOfHour ? "border border-primary" : ""
                  }`}
                >
                  {isInRange && (
                    <div className="bg-primary h-full w-full border rounded-lg"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
