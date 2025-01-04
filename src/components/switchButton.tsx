import { Typography, Box, Switch, styled, SwitchProps } from "@mui/material";
import React from "react";

const StyledSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  margin: "0px !important",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(25px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        background: "linear-gradient(90deg, #ac42e9, #8542e9)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[50],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.8,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface IProps extends SwitchProps {
  label: string;
}

const SwitchButton: React.FC<IProps> = (props) => {
  const { label } = props;
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          border: "1px solid #e3e3e3",
          background: "#f8f8f8",
          p: 1,
          borderRadius: 2,
          height: 52,
        }}
      >
        <Typography>{label}</Typography>
        <StyledSwitch sx={{ m: 1 }} {...props} />
      </Box>
    </>
  );
};

export default SwitchButton;
