import Grid2 from "@mui/material/Grid2";
import Fieldset from "../../components/fieldSet";
import ContentWrapper from "../../components/contentWrapper";
import SelectField from "../../components/selectField";
import { ClientOptions, TimeSlot } from "../../types/type";
import DatePickerCommon from "../../components/datePickerCommon";
import LabelCommon from "../../components/labelCommon";
import TimePickerCommon from "../../components/timePickerCommon";
import { useEffect, useState } from "react";
import Calendar from "../Dashboard/calender";

const DurationOptions: ClientOptions[] = [
  { label: "15 min", value: 0.25 },
  { label: "30 min", value: 0.5 },
  { label: "45 min", value: 0.75 },
];

const clerkOptions: ClientOptions[] = [
  { label: "clerk1", value: "clerk1" },
  { label: "clerk2", value: "clerk2" },
  { label: "clerk3", value: "clerk3" },
  { label: "clerk4", value: "clerk4" },
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedClerk, setSelectedClerk] = useState<any>(null);
  const [selectedDuration, setSelectedDuration] = useState<any>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    if (
      selectedDate &&
      selectedTime &&
      selectedClerk &&
      selectedDuration !== null
    ) {
      const startHour =
        selectedTime.getHours() + selectedTime.getMinutes() / 60;

      const newTimeSlot: TimeSlot = {
        id: timeSlots.length + 1,
        name: selectedClerk,
        startTime: startHour,
        duration: selectedDuration,
      };

      setTimeSlots((prevSlots) => [...prevSlots, newTimeSlot]);

      // Reset fields after adding
      setSelectedTime(null);
      setSelectedDuration(null);
      setSelectedClerk(null);
    }
  }, [selectedDate, selectedTime, selectedClerk, selectedDuration]);

  return (
    <ContentWrapper>
      <Grid2 container size={{ sm: 12, md: 6 }}>
        <Fieldset title="Clerk" key={"inspectionInfo"}>
          <Grid2 container spacing={2} size={{ sm: 12, md: 6 }}>
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
                options={clerkOptions}
                onChange={(event) => setSelectedClerk(event.target.value)}
              />
            </Grid2>
            <Grid2>
              <Calendar resources={timeSlots} />
            </Grid2>
          </Grid2>
        </Fieldset>
      </Grid2>
    </ContentWrapper>
  );
};

export default Schedule;
