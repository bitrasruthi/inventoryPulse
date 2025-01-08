import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { useState } from "react";
import { MenuTypeEnum } from "../../constants/enum";
import Filters from "../../components/filters";
import InspectionList from "./inspectionList";
import {
  inspectionBtnList,
  inspectionFilters,
  tabMenuList,
} from "../../constants/constants";
import GradientButton from "../../components/gradientButton";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import SaveProperty from "../Properties/saveProperty";
import TabsCommon from "../../components/tabsCommon";
import Calendar from "./InspectionCalender";

const Inspections = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
        <Calendar />
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
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add Inspection"
          buttons={
            [
              {
                label: "Cancel",
                variant: "outlined",
                onClick: () => console.log("canceled"),
              },
              {
                label: "Confirm",
                variant: "contained",
                onClick: () => console.log("Confirm"),
              },
            ] as CustomButtonProps[]
          }
        >
          <Typography variant="body1" sx={{ p: 2 }}>
            <SaveProperty />
          </Typography>
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Inspections;
