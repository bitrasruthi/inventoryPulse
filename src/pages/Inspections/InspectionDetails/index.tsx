import { Box, Button, Divider, Drawer, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import TabsCommon from "../../../components/tabsCommon";
import {
  inspectionsDetailsMenuList,
  propertyDetails,
} from "../../../constants/constants";
import SectionTitleCommon from "../../../components/sectionTitleCommon";
import ContentWrapper from "../../../components/contentWrapper";
import ProfileUpload from "../../../components/profileUpload";
import LabelValueCommon from "../../../components/labelValueCommon";
import DateTimeCard from "../../../components/dateTimeCardCommon";
import LabelCommon from "../../../components/labelCommon";
import InspectionStatusStepper from "./inspectionStatusStepper";
import InspectionContactCommon from "../../../components/inspectionContactCommon";
import { paths } from "../../../routes/paths";
import Reports from "./reports";
import EditIcon from "../../../assets/icons/editIcon";
import LocationHomeIcon from "../../../assets/icons/locationHomeIcon";
import AddIcon from "../../../assets/icons/addIcon";
import OutlinedCustomButton from "../../../components/outlinedCustomButton";
import AddSectionDrawer from "./addSectionDrawer";

function InspectionDetails() {
  const [activeTab, setActiveTab] = useState<string>(
    inspectionsDetailsMenuList[0]?.value
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleOpenDialog = () => {
    setIsDrawerOpen(true);
  };

  const handlecloseDialog = () => {
    setIsDrawerOpen(false);
  };

  const contact = [
    {
      name: "Amelia Davies",
      phoneNo: "+44 7911 123456",
      email: "amelia_davies@mail.com",
    },
    {
      name: "Charlie Taylor",
      phoneNo: "+44 7911 123456",
      email: "charlie_taylor@mail.com",
    },
    {
      name: "David Lee",
      phoneNo: "+44 7911 123456",
      email: "david_lee@mail.com",
    },
  ];

  const infoContent = (
    <ContentWrapper>
      <Grid2 spacing={4} container>
        <Grid2 spacing={2} container size={{ xs: 12, md: 10 }}>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                padding: 1,
                backgroundColor: "#f6f6f6",
                gap: 2,
              }}
            >
              <LocationHomeIcon width="36" height="45" />
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                  }}
                >
                  <SectionTitleCommon title="Check In" />
                  <Box sx={{ cursor: "pointer", paddingY: 1 }}>
                    <EditIcon width="12" height="11" />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "roboto-bold",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#333333",
                  }}
                >
                  115-116, Beaverbrook Town House,
                </Typography>
                <span
                  style={{
                    fontFamily: "roboto",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#333333",
                  }}
                >
                  Sloane St, London SW16 9PJ, UK
                </span>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 2 }}>
              <SectionTitleCommon title="Property (view More Details)" />
            </Box>
            <Grid2 mb={2}>
              <ProfileUpload
                title="Edit"
                backgroundImage={"../public/InspectionHome.jpg"}
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
            <Divider />
            <Grid2 container mb={2}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <LabelValueCommon
                  fieldName="Furnishing"
                  value="Fully Furnished"
                  type={1}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <LabelValueCommon fieldName="Type" value="House" type={1} />
              </Grid2>
            </Grid2>
            <Grid2>
              <LabelValueCommon
                fieldName="Property Notes"
                value="Rosewood Residence is a premium residential property situated in the heart of Kensington, one of London's most prestigious neighborhoods. The property spans an area of 2,500 square feet and is an elegant four-bedroom house built in 2015. It is fully registered and holds a clear legal status, making it ready for immediate occupancy or sale."
                type={1}
              />
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Grid2>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 1,
                  mb: 2,
                }}
              >
                <SectionTitleCommon title="Shedule" />
                <Box sx={{ cursor: "pointer", paddingY: 1 }}>
                  <EditIcon width="12" height="11" />
                </Box>
              </Box>
              <Grid2 container>
                <Grid2 size={{ xs: 12, md: 6 }} mb={2}>
                  <Box mb={1}>
                    <LabelCommon
                      fieldName="Conduct Date & Time"
                      fontSize="14px"
                    />
                  </Box>
                  <DateTimeCard date="12 Jan 2025" time="10:30 AM" />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <LabelValueCommon
                    fieldName="Clerk"
                    value="David Lee"
                    type={1}
                  />
                  <LabelValueCommon
                    fieldName="Typist"
                    value="Nancy John"
                    type={1}
                  />
                </Grid2>
              </Grid2>

              <Grid2>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <SectionTitleCommon title="Inspection Details" />
                  <Box sx={{ cursor: "pointer", paddingY: 1 }}>
                    <EditIcon width="12" height="11" />
                  </Box>
                </Box>
                <Grid2 container>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <LabelValueCommon
                      fieldName="Reference Number"
                      value="2345789"
                      type={1}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <LabelValueCommon
                      fieldName="Client"
                      value="Zeltra"
                      type={1}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 6 }}>
                    <LabelValueCommon
                      fieldName="Key Return Instruction"
                      type={1}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 6 }}>
                    <LabelValueCommon fieldName="Location key" type={1} />
                  </Grid2>
                  <Grid2>
                    <LabelValueCommon
                      fieldName="Template"
                      value="Automatically continued from Inventory & Schedule of Condition dated January 17th 2025 "
                      type={1}
                    />
                    <LabelValueCommon
                      fieldName="Internal Notes"
                      value="The primary objective of the inspection is to assess the current condition of the property, identify any maintenance issues, ensure compliance with safety regulations, and verify that the property is being used as intended. Regular inspections help in maintaining the property's value, ensuring tenant satisfaction, and addressing potential problems before they escalate. "
                      type={1}
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }} sx={{ padding: 2, borderRadius: 2 }}>
            <Box sx={{ backgroundColor: "#f6f6f6", padding: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                  }}
                >
                  <SectionTitleCommon title="Contacts" />
                  <Box sx={{ cursor: "pointer", paddingY: 1 }}>
                    <EditIcon width="12" height="11" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  <OutlinedCustomButton
                    label="Add"
                    startIcon={<AddIcon width="12" height="12" />}
                  />
                </Box>
              </Box>
              <Grid2>
                {contact.map((item, index) => (
                  <Grid2>
                    <InspectionContactCommon
                      key={index}
                      name={item.name}
                      phoneNo={item.phoneNo}
                      email={item.email}
                    />
                    <Divider />
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
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
            <ContentWrapper paddingY={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 0,
                  gap : 2
                }}
              >
                <OutlinedCustomButton label="Preview" />
                <OutlinedCustomButton
                  label="Add"
                  fillColor={true}
                  startIcon={
                    <AddIcon width={"12"} height={"12"} fill="#ffff" />
                  }
                  onClick={toggleDrawer(true)}
                />
              </Box>
            </ContentWrapper>
            <AddSectionDrawer
              isDrawerOpen={isDrawerOpen}
              onClose={handlecloseDialog}
            />
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
