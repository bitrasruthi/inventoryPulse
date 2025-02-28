import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { useState } from "react";
import Filters from "../../components/filters";
import InspectionList from "./inspectionList";
import {
  inspectionFilters,
  steps,
  tabMenuList,
} from "../../constants/constants";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import TabsCommon from "../../components/tabsCommon";
import Calendar from "./InspectionCalender";
import useInspectionStore from "../../store/inspectionStore";
import { getBtnTextByCurrentStep } from "../../helpers/Util";
import validate from "../../helpers/validations";
import { useFormHook } from "../../hooks/useFormHook";
import { PropertyDetailsFormValues } from "../../helpers/Interfaces";
import InspectionStepper from "./inspectionStepper";
import InspectionListByDate from "./inspectionListByDate";
import moment from "moment";
import HomeIcon from "../../assets/icons/homeIcon";
import AddHomeIcon from "../../assets/icons/addHomeIcon";


const Inspections = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { currentStep, setCurrentStep } = useInspectionStore();

  const { form } = useFormHook(validate.propertyDetailsSchema);

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    reset();
  };

  const getFormattedDate = () => {
    return moment().format("dddd, MMM D");
  };

  const inspectionBtnList = [
    {
      id: 1,
      name: "Existing Property",
      icon: HomeIcon,
      handleActionClick: handleOpenDialog,
    },
    {
      id: 2,
      name: "New Property",
      icon: AddHomeIcon,
      handleActionClick: handleOpenDialog,
    },
  ];

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
      <Grid
        size={{ md: 2.5 }}
        display={{ xs: "none", md: "block" }}
        sx={{ overflowY: "auto", height: "85vh" }}
      >
        <Filters filters={inspectionFilters} />
      </Grid>
      <Grid size={0}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid size={7}>
        <Box height={"85vh"} sx={{ overflowY: "auto" }}>
          <Calendar />
        </Box>
      </Grid>
      <Grid size={2.5}>
        <Box>
          <InspectionListByDate FormattedDate={getFormattedDate()} />
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

  const onSubmit = (data: PropertyDetailsFormValues) => {
    console.log("submitted", data);
    handleNext();
  };

  console.log(errors);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TabsCommon
        tabMenuList={tabMenuList}
        onTabChange={(value) => setActiveTab(value)}
        tabContent={GetTabContentByActiveTab()}
        buttonList={[
          {
            label: "Add Inspection",
            menuList: inspectionBtnList,
            isGradient: true,
          },
        ]}
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
                  onClick: () => handleSubmit(onSubmit)(),
                },
              ] as CustomButtonProps[]
            }
          >
            <Typography variant="body1" sx={{ p: 2 }}>
              <InspectionStepper formProps={form} />
            </Typography>
          </FullScreenDialog>
        )}
      </form>
    </Box>
  );
};

export default Inspections;
