import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, IconButton, Tab, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import OutlinedCustomButton from "./outlinedCustomButton";
import GradientButton from "./gradientButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

interface Props {
  tabMenuList: [
    { id: number; label: string; isActive: boolean; value: string; icon: any }
  ];
  onTabChange: (value: string) => void;
  tabContent: JSX.Element;
  buttonList?: any;
  showBackButton?: boolean;
  previousMenuUrl?: string | undefined;
}

const TabsCommon: React.FC<Props> = ({
  tabMenuList,
  onTabChange,
  tabContent,
  buttonList,
  showBackButton,
  previousMenuUrl,
}) => {
  const navigate = useNavigate();
  const matches = useMediaQuery((_theme: any) =>
    _theme?.breakpoints?.down("700")
  );
  const [value, setValue] = React.useState(tabMenuList[0]?.value);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <>
      <Box
        display={{
          xs: "flex",
          md: showBackButton ? "flex" : "none",
          lg: "none",
        }}
        flexWrap={"wrap"}
        gap={1}
        px={2}
        pb={2}
      >
        {showBackButton && (
          <IconButton
            sx={{
              color: "white",
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
            onClick={() => {
              if (previousMenuUrl) {
                navigate(previousMenuUrl);
              }
            }}
          >
            <ArrowBackIosNewIcon aria-label="close" fontSize="medium" />
          </IconButton>
        )}
        {buttonList?.map((btn: any) =>
          btn?.isGradient ? (
            <GradientButton {...btn} handleAction={btn.action} />
          ) : (
            <OutlinedCustomButton {...btn} />
          )
        )}
      </Box>
      <TabContext value={value}>
        <Box>
          <TabList
            variant={
              tabMenuList?.length >= 5 && matches ? "scrollable" : "standard"
            }
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              ml: 2,

              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                top: 1,
                "::before": {
                  content: '""',
                  position: "absolute",
                  width: "75%",
                  height: "4px",
                  backgroundColor: theme.palette.primary.main,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                },
              },

              "& .MuiTab-root": {
                bgcolor: "#fbfbfb",
                border: "1px solid #d8d8d8",
                minHeight: "50px",
              },

              "& .Mui-selected": {
                borderBottom: "none",
                bgcolor: "#fff",
                color: `${theme.palette.primary.main} !important`,
              },
            }}
          >
            {showBackButton && (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: showBackButton ? "none" : "flex",
                    lg: "flex",
                  },
                  alignItems: "center",
                  position: "relative",
                  right: 15,
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
                  onClick={() => {
                    if (previousMenuUrl) {
                      navigate(previousMenuUrl);
                    }
                  }}
                >
                  <ArrowBackIosNewIcon aria-label="close" fontSize="medium" />
                </IconButton>
              </Box>
            )}
            {tabMenuList?.map((item) => (
              <Tab
                key={item.label}
                label={
                  <Typography sx={{ fontFamily: "roboto-bold" }}>
                    {item?.label}
                  </Typography>
                }
                icon={item.icon}
                iconPosition="start"
                value={item?.value}
                sx={{
                  px: 3,
                  mr: 1,
                  background: "#fff",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  border: "none",
                  textTransform: "none",
                }}
              />
            ))}

            <Box
              sx={{
                width: "100%",
                justifyContent: "right",
                alignItems: "center",
                pb: 2,
                display: {
                  xs: "none",
                  md: showBackButton ? "none" : "flex",
                  lg: "flex",
                },
                px: 1,
              }}
              gap={1}
            >
              {buttonList?.map((btn: any) =>
                btn?.isGradient ? (
                  <GradientButton {...btn} handleAction={btn.action} />
                ) : (
                  <OutlinedCustomButton {...btn} />
                )
              )}
            </Box>
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
