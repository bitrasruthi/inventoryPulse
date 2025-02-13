import Grid2 from "@mui/material/Grid2";
import Fieldset from "../../components/fieldSet";
import ContentWrapper from "../../components/contentWrapper";
import SelectField from "../../components/selectField";
import {
  ClientOptions,
  ClientTimeSlots,
  ScheduledTime,
  TimeSlot,
} from "../../types/type";
import DatePickerCommon from "../../components/datePickerCommon";
import LabelCommon from "../../components/labelCommon";
import TimePickerCommon from "../../components/timePickerCommon";
import { useEffect, useState } from "react";
import Calendar from "../Dashboard/calender";
import { Box, Container } from "@mui/material";

const DurationOptions: ClientOptions[] = [
  { label: "15 min", value: 0.25 },
  { label: "30 min", value: 0.5 },
  { label: "45 min", value: 0.75 },
];

const clerkTimeSlots: ClientTimeSlots[] = [
  {
    id: 1,
    name: "Praveen",
    scheduledTimes: [
      {
        startTime: 7,
        duration: 0.5,
      },
      {
        startTime: 8,
        duration: 0.75,
      },
    ],
  },
  {
    id: 2,
    name: "Kumutha",
    scheduledTimes: [
      {
        startTime: 9,
        duration: 0.5,
      },
      {
        startTime: 10,
        duration: 0.75,
      },
    ],
  },
];

const clerkList: ClientOptions[] = clerkTimeSlots.map((item) => {
  return {
    label: item.name,
    value: item.id,
  } as ClientOptions;
});

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedClerk, setSelectedClerk] = useState<any>(null);
  const [selectedDuration, setSelectedDuration] = useState<any>(null);
  const [timeSlots, setTimeSlots] = useState<ClientTimeSlots[]>([]);

  useEffect(() => {
    updateClerkTimeSlot();
  }, [selectedTime, selectedClerk, selectedDuration]);

  const updateClerkTimeSlot = () => {
    if (selectedTime && selectedClerk && selectedDuration) {
      const startHour =
        selectedTime.getHours() + selectedTime.getMinutes() / 60;

      var _selectedClerk = clerkTimeSlots.find(
        (item) => item.id == selectedClerk
      );

      var alreadyClerkHasSlot = _selectedClerk?.scheduledTimes.find(
        (item) =>
          item.startTime == startHour && item.duration == selectedDuration
      );

      if (alreadyClerkHasSlot) return;

      const newTimeSlot: ScheduledTime = {
        startTime: startHour,
        duration: selectedDuration,
      };

      _selectedClerk?.scheduledTimes.push(newTimeSlot);

      //setTimeSlots((prevSlots) => [...prevSlots, newTimeSlot]);
    }
  };

  return (
    <ContentWrapper>
      <Fieldset title="Clerk" key={"inspectionInfo"}>
        <Grid2 container spacing={4}>
          <Grid2 size={3}>
            <LabelCommon fieldName="Date" />
            <DatePickerCommon setSelectedDate={setSelectedDate} />
          </Grid2>
          <Grid2 size={3}>
            <LabelCommon fieldName="Time" />
            <TimePickerCommon setSelectedTime={setSelectedTime} />
          </Grid2>
          <Grid2 size={3}>
            <LabelCommon fieldName="Estimated Duration" />
            <SelectField
              options={DurationOptions}
              onChange={(event) => setSelectedDuration(event.target.value)}
            />
          </Grid2>
          <Grid2 size={3}>
            <LabelCommon fieldName="Clerk" />
            <SelectField
              options={clerkList}
              onChange={(event) => setSelectedClerk(event.target.value)}
            />
          </Grid2>
        </Grid2>

        <Container sx={{ width: "90%" }}>
          <Grid2 container>
            <Grid2 size={12}>
              <Calendar resources={timeSlots} />
            </Grid2>
          </Grid2>
        </Container>
      </Fieldset>
    </ContentWrapper>
  );
};

export default Schedule;
