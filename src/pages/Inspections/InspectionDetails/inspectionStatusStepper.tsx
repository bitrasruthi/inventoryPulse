import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentWrapper from "../../../components/contentWrapper";
import Button from "@mui/material/Button";

const steps = [
  {
    label: "Pending",
    description: "04 Jan, 2025 10:20 AM",
    value: 1,
    button: "Cancel Processing",
  },
  {
    label: "Assigned",
    description: "04 Jan, 2025 10:21 AM",
    value: 2,
    button: "Cancel Processing",
  },
  {
    label: "Active",
    description: "04 Jan, 2025 10:21 AM",
    value: 3,
    button: "Cancel Processing",
  },
  {
    label: "Processing",
    description: "Typist Processing",
    value: 4,
    button: "Cancel Processing",
  },
  {
    label: "Review",
    description: "Manager Review",
    value: 5,
    button: "Cancel Processing",
  },
  {
    label: "Complete",
    description: "Ready to Sign/Download",
    value: 6,
    button: "Cancel Processing",
  },
  {
    label: "Closed",
    description: "Report Archived",
    value: 7,
    button: "Cancel Processing",
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
  const [activeStep] = React.useState(4);

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
                <Typography
                  fontWeight={activeStep === step.value ? "bold" : "normal"}
                  sx={{ fontSize: "14px" }}
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    color: "back",
                    fontSize: "14px",
                  }}
                >
                  {step.description}
                </Typography>
              </StepLabel>

              <StepContent>
                {step.button && (
                  <Box sx={{ my: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        fontSize: "12px",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.button}
                    </Button>
                  </Box>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </ContentWrapper>
  );
}

export default InspectionStatusStepper;
