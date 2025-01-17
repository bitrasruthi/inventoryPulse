import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import TabsCommon from "../../../components/tabsCommon";
import { inspectionsDetailsMenuList } from "../../../constants/constants";
import GradientButton from "../../../components/gradientButton";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import InspectionStatus from "./inspectionStatusStepper";

function InspectionDetails() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<string>(
    inspectionsDetailsMenuList[0]?.value
  );
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              //   gap: 1,
            }}
          >
            <IconButton
              sx={{
                marginLeft: 2,
                color: "white",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <ArrowBackIosNewIcon aria-label="close" fontSize="medium" />
            </IconButton>
            <TabsCommon
              tabMenuList={inspectionsDetailsMenuList}
              onTabChange={(value) => setActiveTab(value)}
              tabContent={<></>}
            />
          </Box>
          <GradientButton
            label="Mark As Complete"
            // menuList={inspectionBtnList}
            isGradient={true}
            // handleDialogOpen={handleOpenDialog}
          />
        </Box>
        <InspectionStatus />
      </>
    );
}

export default InspectionDetails;
