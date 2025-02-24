import { styled, Box } from "@mui/material";

const ReportsSettingsStyles = styled(Box)(({ theme }) => ({
  padding: 20,
  "& .slider-img": {
    paddingRight: 10,
    cursor: "pointer",
    position: "relative",
    "& .img": {
      width: "100%",
      height: "auto",
      borderRadius: 5,
    },
  },
  "& .check-icon": {
    position: "absolute",
    background: theme.palette.primary.main,
    borderRadius: "50%",
    top: 10,
    right: 15,
    color: "#fff",
    padding: 3,
  },
  "& .palette-icon": {
    color: "#fff",
    background: "#111",
    borderRadius: "50%",
    padding: 3,
    cursor: "pointer",
  },
  "& .text-field": {
    marginTop: 10,
    width: "50%",
  },
  "& .check-icon-palette": {
    position: "absolute",
    background: theme.palette.primary.main,
    color: "#fff",
    bottom: 0,
    left: 15,
    width: 12,
    height: 12,
    borderRadius: "50%",
  },
  "& .color-circle": {
    height: 24,
    width: 24,
    borderRadius: "50%",
    cursor: "pointer",
    boxSizing: "content-box",
    position: "relative",
  },
}));

export default ReportsSettingsStyles;
