import Grid2 from "@mui/material/Grid2";
import Fieldset from "../../components/fieldSet";
import ContentWrapper from "../../components/contentWrapper";
import SelectField from "../../components/selectField";
import { ClientOptions } from "../../types/type";
import DatePickerCommon from "../../components/datePickerCommon";
import LabelCommon from "../../components/labelCommon";
import TimePickerCommon from "../../components/timePickerCommon";
import { useState } from "react";
import Calendar from "./InspectionCalender";

const DurationOptions: ClientOptions[] = [{ label: "30 min", value: "30" }];
const clerkOptions: ClientOptions[] = [
  { label: "name", value: "value" },
  { label: "name", value: "value" },
  { label: "name", value: "value" },
  { label: "name", value: "value" },
];

const Schedule = () => {
  const inspectionType: ClientOptions[] = [
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
  ];
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <ContentWrapper>
      <Grid2 spacing={4} container size={{ sm: 12, md: 6 }}>
        <Grid2 size={12} rowSpacing={4}>
          <Fieldset title="Clerk" key={"inspectionInfo"}>
            <Grid2 container spacing={2}>
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
                <SelectField options={DurationOptions} />
              </Grid2>
              <Grid2 size={3}>
                <LabelCommon fieldName="Clerk" />
                <SelectField options={clerkOptions} />
              </Grid2>
              <Grid2 size={12}>
                <Calendar />
              </Grid2>
            </Grid2>
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default Schedule;
