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
import { activities } from "../constants/constants";

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
