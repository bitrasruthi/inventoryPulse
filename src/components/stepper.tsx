import {
  StepIconProps,
  Step,
  StepLabel,
  styled,
  Stepper,
  StepConnector,
  stepConnectorClasses,
  Box,
  Button,
  IconButton,
  Container,
  Grid2,
} from "@mui/material";
import React from "react";
import PropertyDetailsIcon from "../assets/icons/propertyDetailsIcon";
import InspectionDetailsIcon from "../assets/icons/inspectionDetailsIcon";
import ScheduleIcon from "../assets/icons/scheduleIcon";
import ContactsIcon from "../assets/icons/contactsIcon";
import theme from "../styles/theme";
import { StepperStepEnum, StepStatusEnum } from "../constants/enum";
import useInspectionStore from "../store/inspectionStore";
import { contactListDummy } from "../constants/constants";
import ContactList from "../pages/Contacts/contactList";
import InspectionList from "../pages/Inspections/inspectionList";
import SaveProperty from "../pages/Properties/saveProperty";
import DatePickerCommon from "./datePickerCommon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimePickerCommon from "./timePickerCommon";
import { momentDateFormatUtil, momentTimeFormatUtil } from "../helpers/Util";
import LabelCommon from "./labelCommon";
import SelectField from "./selectField";
import { ClientOptions } from "../types/type";

const DurationOptions: ClientOptions[] = [{ label: "30 min", value: "30" }];
const clerkOptions: ClientOptions[] = [
  { label: "name", value: "value" },
  { label: "name", value: "value" },
  { label: "name", value: "value" },
  { label: "name", value: "value" },
];

type Props = {};

const steps = [
  {
    enum: StepperStepEnum.PropertyDetails,
    label: "Property Details",
    status: 0,
  },
  {
    enum: StepperStepEnum.InspectionDetails,
    label: "Inspection Details",
    status: 0,
  },
  { enum: StepperStepEnum.Schedule, label: "Schedule", status: 0 },
  { enum: StepperStepEnum.Contacts, label: "Contacts", status: 0 },
];

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: theme.palette.text.secondary,
    fontFamily: "roboto-black",
    "&.Mui-completed": {
      fontFamily: "roboto-bold",
      color: theme.palette.primary.main,
    },
    "&.Mui-active": {
      fontFamily: "roboto-bold",
      color: theme.palette.primary.main,
    },
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 20,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: completed ? (
      <IconButton
        sx={{
          background:
            "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
          p: 0.8,
        }}
      >
        <CheckCircleIcon sx={{ color: "#fff", width: 20, height: 20 }} />
      </IconButton>
    ) : (
      <PropertyDetailsIcon fill={active ? theme.palette.primary.main : ""} />
    ),
    2: completed ? (
      <IconButton
        sx={{
          background:
            "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
          p: 0.8,
        }}
      >
        <CheckCircleIcon sx={{ color: "#fff", width: 20, height: 20 }} />
      </IconButton>
    ) : (
      <InspectionDetailsIcon fill={active ? theme.palette.primary.main : ""} />
    ),

    3: completed ? (
      <IconButton
        sx={{
          background:
            "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
          p: 0.8,
        }}
      >
        <CheckCircleIcon sx={{ color: "#fff", width: 20, height: 20 }} />
      </IconButton>
    ) : (
      <ScheduleIcon fill={active ? theme.palette.primary.main : ""} />
    ),
    4: completed ? (
      <IconButton
        sx={{
          background:
            "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
          p: 0.8,
        }}
      >
        <CheckCircleIcon sx={{ color: "#fff", width: 20, height: 20 }} />
      </IconButton>
    ) : (
      <ContactsIcon fill={active ? theme.palette.primary.main : ""} />
    ),
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

const StepperCommon = (_props: Props) => {
  const { currentStep, setCurrentStep } = useInspectionStore();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<Date | null>(null);

  const totalSteps = () => {
    return steps.length - 1;
  };

  const isLastStep = () => {
    return currentStep === totalSteps();
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStep = (step: number) => () => {
    setCurrentStep(step);
  };

  console.log(
    momentDateFormatUtil(selectedDate),
    momentTimeFormatUtil(selectedTime)
  );

  return (
    <>
      <Container>
        <Stepper
          alternativeLabel
          activeStep={currentStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((item, index) => {
            const stepProps: { completed?: boolean; disabled?: boolean } = {};

            if (index > currentStep) {
              stepProps.disabled = true;
            }
            if (item.status === StepStatusEnum.Completed) {
              stepProps.completed = true;
            }

            return (
              <Step key={item.enum}>
                <CustomStepLabel
                  slots={{
                    stepIcon: ColorlibStepIcon,
                  }}
                  onClick={handleStep(index)}
                >
                  {item.label}
                </CustomStepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Container>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={currentStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          {isLastStep() ? "Complete" : "Next"}
        </Button>
      </Box>
      {currentStep === StepperStepEnum.PropertyDetails ? (
        <SaveProperty />
      ) : currentStep === StepperStepEnum.InspectionDetails ? (
        <InspectionList />
      ) : currentStep === StepperStepEnum.Schedule ? (
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
        </Grid2>
      ) : currentStep === StepperStepEnum.Contacts ? (
        <ContactList list={contactListDummy} />
      ) : (
        ""
      )}
    </>
  );
};

export default StepperCommon;
