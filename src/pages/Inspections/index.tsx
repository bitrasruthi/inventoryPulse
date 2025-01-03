import { Box, Divider, Grid2 as Grid } from "@mui/material";
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
import Calendar from "./InspectionCalender";
import TabsCommon from "../../components/TabsCommon";

const Inspections = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);

  const inspectionListContent = (
    <Grid container spacing={0}>
      <Grid size={3}>
        <Filters filters={inspectionFilters} />
      </Grid>
      <Grid size={0}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid size={9}>
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
        hasMenu={true}
      />
    </Box>
  );
};

export default Inspections;
