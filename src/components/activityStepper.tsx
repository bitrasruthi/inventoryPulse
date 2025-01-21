import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import InspectionContactCommon from "./inspectionContactCommon";
import LabelValueCommon from "./labelValueCommon";
import LabelCommon from "./labelCommon";
import { Grid2 } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const activities = [
  {
    name: "Kumar Raja",
    status: "changed Inspection Type",
    timestamp: "today 04:38 PM",
    action: "Check Out → Check In",
  },
  {
    name: "David Thomas",
    file: "untitled.pdf",
    status: "uploaded a document",
    timestamp: "today 04:30 PM",
    // action: "",
  },
  {
    name: "Kumar Raja",
    status: "changed the status",
    timestamp: "today 04:20 PM",
    action: "Pending → Assigned",
  },
  {
    name: "Kumar Raja",
    status: "added an inspection note",
    timestamp: "today 04:18 PM",
    action:
      "The primary objective of the inspection is to assess the current condition of the property, identify any maintenance issues, ensure compliance with safety regulations, and verify that the property is being used as intended. Regular inspections help in maintaining the property's value, ensuring tenant satisfaction, and addressing potential problems before they escalate.",
  },
];

const CustomStepIcon = () => {
  return <CircleOutlinedIcon />;
};

export default function ActivityStepper() {
  return (
    <Box>
      <Stepper orientation="vertical" connector={null}>
        {activities.map((activity, index) => (
          <Step key={index} active>
            <StepLabel slots={{ stepIcon: CustomStepIcon }}>
              <Box
                sx={{
                  fontFamily: "Roboto-regular",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <InspectionContactCommon
                  fieldName={activity.name}
                  heightWidth={30}
                  type={2}
                  fontSize="16px"
                />
                <Grid2
                  sx={{
                    fontFamily: "Roboto-regular",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {activity.file && (
                    <LabelValueCommon fieldName={activity.file} type={2} />
                  )}
                  <LabelCommon fieldName={activity.status} />
                  <LabelCommon fieldName={activity.timestamp} />
                </Grid2>
              </Box>
            </StepLabel>
            <StepContent>
              <Box sx={{ ml: "45px" }}>
                <LabelValueCommon fieldName={activity.action} type={2} />
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
