import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"; // Empty circle icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Checkmark icon (optional)
import ContentWrapper from "../../../components/contentWrapper";

const steps = [
  {
    label: "Pending",
    description: "04 Jan",
    value: 1,
  },
  {
    label: "Assigned",
    description: "04 Jan",
    value: 2,
  },
  {
    label: "Active",
    description: "04 Jan",
    value: 3,
  },
  {
    label: "Complete",
    description: "04 Jan",
    value: 4,
  },
  {
    label: "Closed",
    description: "04 Jan",
    value: 5,
  },
];

// Custom StepIcon component
function CustomStepIcon({
  active,
  completed,
}: {
  active: boolean;
  completed: boolean;
}) {
  if (completed) {
    return <CheckCircleIcon color="primary" />;
  }
  return active ? (
    <CircleOutlinedIcon color="primary" />
  ) : (
    <CircleOutlinedIcon color="disabled" />
  );
}

function InspectionStatusStepper() {
  const [activeStep] = React.useState(3);

  return (
    <ContentWrapper>
      <Box sx={{ Width: "100%" }}>
        <Stepper activeStep={activeStep - 1} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} completed={activeStep > step.value}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    fontSize: "14px",
                    fontFamily:
                      activeStep === step.value ? "Roboto-bold" : "Roboto",
                    color:
                      activeStep === step.value
                        ? (theme) => theme.palette.primary.main
                        : "inherit",
                  },
                }}
                slots={{
                  stepIcon: (props) =>
                    React.cloneElement(
                      <CustomStepIcon active={false} completed={false} />,
                      {
                        active: activeStep === step.value,
                        completed: activeStep > step.value,
                      }
                    ),
                }}
              >
                {step.label}
              </StepLabel>

              <StepContent>
                <Typography sx={{ fontSize: "14px" }}>
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </ContentWrapper>
  );
}

export default InspectionStatusStepper;
