import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography } from "@mui/material";
import React from "react";
import theme from "../styles/theme";

interface Props {
  tabMenuList: [
    { id: number; label: string; isActive: boolean; value: string; icon: any }
  ];
  type: number;
  onTabChange: (value: string) => void;
  tabContent: JSX.Element;
}

const TabsCommon: React.FC<Props> = ({
  tabMenuList,
  onTabChange,
  tabContent,
}) => {
  const [value, setValue] = React.useState(tabMenuList[0]?.value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              ml: 2,
              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                top: 0,
                "::before": {
                  content: '""',
                  position: "absolute",
                  width: "80%",
                  height: "3px",
                  backgroundColor: theme.palette.primary.main,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
              },

              "& .MuiTabs-indicatorSpan": {
                maxWidth: 40,
                width: "100%",
                backgroundColor: "#635ee7",
              },

              "& .MuiTab-root": {
                bgcolor: "#fbfbfb",
                border: "1px solid #d8d8d8",
                minHeight: "50px",
              },

              "& .Mui-selected": {
                bgcolor: "#fff",
                color: `${theme.palette.primary.main} !important`,
              },
            }}
          >
            {tabMenuList?.map((item) => (
              <Tab
                label={
                  <Typography sx={{ fontWeight: 600 }}>
                    {item?.label}
                  </Typography>
                }
                icon={item.icon}
                iconPosition="start"
                value={item?.value}
                sx={{
                  px: 3,
                  background: "#fff",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  textTransform: "none",
                }}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel
          value={value}
          sx={{
            bgcolor: "#fff",
            p: 0,
          }}
        >
          {tabContent}
        </TabPanel>
      </TabContext>
    </>
  );
};

export default TabsCommon;
