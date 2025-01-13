import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { useState } from "react";
import { MenuTypeEnum } from "../../constants/enum";
import Filters from "../../components/filters";
import InspectionList from "./inspectionList";
import {
  inspectionBtnList,
  inspectionFilters,
  steps,
  tabMenuList,
} from "../../constants/constants";
import GradientButton from "../../components/gradientButton";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import TabsCommon from "../../components/tabsCommon";
import Calendar from "./InspectionCalender";
import StepperCommon from "../../components/stepper";
import useInspectionStore from "../../store/inspectionStore";
import { getBtnTextByCurrentStep } from "../../helpers/Util";
import validate from "../../helpers/validations";
import { useFormHook } from "../../hooks/useFormHook";
import { propertyDetailsInterface } from "../../helpers/Interfaces";

const Inspections = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { currentStep, setCurrentStep } = useInspectionStore();

  const { register, handleSubmit, errors, reset } = useFormHook(
    validate.propertyDetailsSchema
  );

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    reset();
  };

  const inspectionListContent = (
    <Grid container spacing={0}>
      <Grid
        size={{ md: 3 }}
        display={{ xs: "none", md: "block" }}
        sx={{ overflowY: "auto", height: "85vh" }}
      >
        <Filters filters={inspectionFilters} />
      </Grid>
      <Grid size={0}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <InspectionList />
      </Grid>
    </Grid>
  );

  const inspectionCalendarContent = (
    <Grid container spacing={0}>
      <Grid size={3}>
        <Filters filters={inspectionFilters} />
      </Grid>
      <Grid size={0}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid size={9}>
        <Box height={"85vh"} sx={{ overflowY: "auto" }}>
          <Calendar />
        </Box>
      </Grid>
    </Grid>
  );

  const GetTabContentByActiveTab = (): JSX.Element => {
    switch (activeTab) {
      case "1":
        return <>{inspectionListContent}</>;
      case "2":
        return <>{inspectionCalendarContent}</>;
      default:
        return <></>;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: propertyDetailsInterface) => {
    console.log("submitted", data);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TabsCommon
        type={MenuTypeEnum.Inspections}
        tabMenuList={tabMenuList}
        onTabChange={(value) => setActiveTab(value)}
        tabContent={GetTabContentByActiveTab()}
      />
      <GradientButton
        label="Add Inspection"
        menuList={inspectionBtnList}
        isGradient={true}
        handleDialogOpen={handleOpenDialog}
      />
      <form onSubmit={handleSubmit(onSubmit)} id={"inspection-form"}>
        {dialogOpen && (
          <FullScreenDialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            title="Add Inspection"
            buttons={
              [
                {
                  label: "Back",
                  variant: "outlined",
                  onClick: () => handleBack(),
                },
                {
                  label: getBtnTextByCurrentStep(currentStep),
                  variant: "contained",
                  onClick: () =>
                    document
                      .getElementById("inspection-form")
                      ?.dispatchEvent(
                        new Event("submit", { cancelable: true, bubbles: true })
                      ),
                },
              ] as CustomButtonProps[]
            }
          >
            <Typography variant="body1" sx={{ p: 2 }}>
              <StepperCommon register={register} errors={errors} />
            </Typography>
          </FullScreenDialog>
        )}
      </form>
    </Box>
  );
};

export default Inspections;
