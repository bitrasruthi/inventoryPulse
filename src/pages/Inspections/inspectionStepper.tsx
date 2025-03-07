import {
  StepIconProps,
  Step,
  StepLabel,
  styled,
  Stepper,
  StepConnector,
  stepConnectorClasses,
  IconButton,
  Container,
} from "@mui/material";
import React from "react";
import ContactsIcon from "../../assets/icons/contactsIcon";
import InspectionDetailsIcon from "../../assets/icons/inspectionDetailsIcon";
import PropertyDetailsIcon from "../../assets/icons/propertyDetailsIcon";
import ScheduleIcon from "../../assets/icons/scheduleIcon";
import { steps, contactListDummy } from "../../constants/constants";
import { StepStatusEnum, StepperStepEnum } from "../../constants/enum";
import { PropertyDetailsFormValues } from "../../helpers/Interfaces";
import useInspectionStore from "../../store/inspectionStore";
import theme from "../../styles/theme";
import ContactList from "../Contacts/contactList";
import SaveProperty from "../Properties/saveProperty";
import AddInspection from "./addInspection";
import Schedule from "./schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UseFormReturn } from "react-hook-form";

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

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },

  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
      border: 0,
    },
  },

  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(120deg, rgba(133,66,233,1) 0%, rgba(172,66,233,1) 50%, rgba(201,66,233,1) 100%)",
      border: 0,
    },
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    borderBottom: "3px dotted #eaeaf0",
    backgroundColor: "transparent",
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

interface IProps {
  formProps: UseFormReturn<PropertyDetailsFormValues>;
}

const InspectionStepper: React.FC<IProps> = ({ formProps }) => {
  const { currentStep, setCurrentStep } = useInspectionStore();

  const handleStep = (step: number) => () => {
    setCurrentStep(step);
  };

  return (
    <>
      <Container sx={{ mb: 5 }}>
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
      {currentStep === StepperStepEnum.PropertyDetails ? (
        <SaveProperty formProps={formProps} />
      ) : currentStep === StepperStepEnum.InspectionDetails ? (
        <AddInspection />
      ) : currentStep === StepperStepEnum.Schedule ? (
        <Schedule />
      ) : currentStep === StepperStepEnum.Contacts ? (
        <ContactList list={contactListDummy} />
      ) : (
        ""
      )}
    </>
  );
};

export default InspectionStepper;
