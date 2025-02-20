import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import TabsCommon from "../../../components/tabsCommon";
import {
  inspectionsDetailsMenuList,
  propertyDetails,
} from "../../../constants/constants";
import SectionTitleCommon from "../../../components/sectionTitleCommon";
import ContentWrapper from "../../../components/contentWrapper";
import ProfileUpload from "../../../components/profileUpload";
import BuildingIcon from "../../../assets/icons/buildingIcon";
import LabelValueCommon from "../../../components/labelValueCommon";
import DateTimeCard from "../../../components/dateTimeCardCommon";
import LabelCommon from "../../../components/labelCommon";
import InspectionStatusStepper from "./inspectionStatusStepper";
import InspectionContactCommon from "../../../components/inspectionContactCommon";
import Divider from "@mui/material/Divider";
import { paths } from "../../../routes/paths";
import Reports from "./reports";

function InspectionDetails() {
  const [activeTab, setActiveTab] = useState<string>(
    inspectionsDetailsMenuList[0]?.value
  );

  const infoContent = (
    <ContentWrapper>
      <Grid2 container spacing={{ xs: 0, md: 4 }}>
        <Grid2 size={{ xs: 12, md: 2.5 }}>
          <SectionTitleCommon title="Property (view More Details)" />
          <Grid2>
            <ProfileUpload
              title="Choose Cover Photo"
              image={<BuildingIcon />}
            />
          </Grid2>
          <Grid2
            container
            spacing={{ xs: 0, md: 2 }}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
              mb: 2,
            }}
          >
            {propertyDetails.map((item, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 1,
                  }}
                >
                  <Box sx={{ color: "#8542E9" }}>{item.icon}</Box>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "roboto-black" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    marginTop: 0.5,
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Grid2>
          <Grid2>
            <LabelValueCommon
              fieldName="Property Notes"
              value="Rosewood Residence is a premium residential property situated in the heart of Kensington, one of London's most prestigious neighborhoods. The property spans an area of 2,500 square feet and is an elegant four-bedroom house built in 2015. It is fully registered and holds a clear legal status, making it ready for immediate occupancy or sale."
              type={1}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <SectionTitleCommon title="Shedule" />
          <Grid2 size={{ xs: 12 }} container sx={{ paddingY: "10px" }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <LabelCommon fieldName="Conduct Date & Time" fontSize="14px" />
              <DateTimeCard date="12 Jan 2025" time="10:30 AM" />{" "}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} container>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <LabelValueCommon
                  fieldName="Clerk"
                  value="David Lee"
                  type={1}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <LabelValueCommon
                  fieldName="Typist"
                  value="Nancy John"
                  type={1}
                />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12 }} container sx={{ paddingBottom: "15px" }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <LabelValueCommon
                fieldName="Reference Number"
                value="2345789"
                type={2}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <LabelValueCommon fieldName="Client" value="Zeltra" type={1} />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 6 }}>
              <LabelValueCommon
                fieldName="Template"
                value="Check In"
                type={1}
              />
            </Grid2>
            <Grid2 size={{ xs: 6, md: 4 }}>
              <LabelValueCommon fieldName="Key Return Instruction" type={1} />
            </Grid2>
            <Grid2>
              <LabelValueCommon
                fieldName="Template"
                value="Automatically continued from Inventory & Schedule of Condition dated January 17th 2025 "
                type={2}
              />
              <LabelValueCommon
                fieldName="Internal Notes"
                value="The primary objective of the inspection is to assess the current condition of the property, identify any maintenance issues, ensure compliance with safety regulations, and verify that the property is being used as intended. Regular inspections help in maintaining the property's value, ensuring tenant satisfaction, and addressing potential problems before they escalate. "
                type={2}
              />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <SectionTitleCommon title="Contacts" />
          <Grid2>
            <InspectionContactCommon
              fieldName="Amelia Davies"
              value="+44 7911 123456"
              type={2}
            />
            <InspectionContactCommon
              fieldName="Charlie Taylor"
              value="+44 7911 123456"
              type={2}
            />
            <InspectionContactCommon
              fieldName="Olivia Wilson"
              value="+44 7911 123456"
              type={2}
            />
          </Grid2>
        </Grid2>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "grey",
          }}
        />
        <Grid2 size={{ xs: 12, md: 2 }}>
          <Grid2>
            <InspectionStatusStepper />
          </Grid2>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );

  const GetTabContentByActiveTab = (): JSX.Element => {
    switch (activeTab) {
      case "1":
        return <>{infoContent}</>;
      case "2":
        return (
          <>
            {/* <ReportsRsuite /> */}
            <Reports />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <TabsCommon
        tabMenuList={inspectionsDetailsMenuList}
        onTabChange={(value) => setActiveTab(value)}
        tabContent={GetTabContentByActiveTab()}
        buttonList={[
          {
            label: "Mark As Complete",
            isGradient: true,
          },
        ]}
        showBackButton={true}
        previousMenuUrl={paths.INSPECTIONS}
      />
    </>
  );
}

export default InspectionDetails;
