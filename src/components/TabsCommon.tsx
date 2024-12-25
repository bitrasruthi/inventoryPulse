import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
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
              "& .MuiTabs-indicator": {
                top: {
                  // xs: 20,
                  lg: 0,
                },
                bottom: "unset",
                height: 3,
                backgroundColor: theme.palette.primary.main,
                width: "60px !important",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                marginLeft: "15px",
              },

              "& .MuiTab-root": {
                bgcolor: "#fbfbfb",
                border: "1px solid #d8d8d8",
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
                  <Box display={"flex"} alignItems={"center"}>
                    <item.icon sx={{ width: 15, height: 15 }} />
                    {item?.label}
                  </Box>
                }
                value={item?.value}
                sx={{
                  p: 0,
                  background: "#fff",
                  mr: 2,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
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
