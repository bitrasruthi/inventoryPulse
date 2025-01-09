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
} from "@mui/material";
import React from "react";
import PropertyDetailsIcon from "../assets/icons/propertyDetailsIcon";
import InspectionDetailsIcon from "../assets/icons/inspectionDetailsIcon";
import ScheduleIcon from "../assets/icons/scheduleIcon";
import ContactsIcon from "../assets/icons/contactsIcon";
import theme from "../styles/theme";

type Props = {};

const steps = [
  "Property Details",
  "Inspection Details",
  "Schedule",
  "Contacts",
];

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: theme.palette.text.secondary,
    fontFamily: "roboto-medium",
    "&.Mui-completed": {
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
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    borderTop: "3px dotted #eaeaf0",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;
  console.log(completed);

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: (
      <PropertyDetailsIcon fill={completed ? theme.palette.primary.main : ""} />
    ),
    2: (
      <InspectionDetailsIcon
        fill={completed ? theme.palette.primary.main : ""}
      />
    ),
    3: <ScheduleIcon fill={completed ? theme.palette.primary.main : ""} />,
    4: <ContactsIcon fill={completed ? theme.palette.primary.main : ""} />,
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps();
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  console.log(completedSteps(), totalSteps());

  return (
    <>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <CustomStepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={handleStep(index)}
            >
              {label}
            </CustomStepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          {isLastStep() && !completed[activeStep] ? "Complete" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default StepperCommon;
