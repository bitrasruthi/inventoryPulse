import { styled, Box } from "@mui/material";

const ReportsStyles = styled(Box)(({ theme }) => ({
  padding: 20,
  "& .parent-container": {
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  "& .expand-collapse-grid": {
    borderRight: "1px solid #ddd",
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
    cursor: "pointer",
  },
  "& .parent-index-grid": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #ddd",
    width: "3%",
  },
  "& .parent-content-grid": {
    padding: 10,
    flexGrow: 1,
  },
  "& .parent-icons-grid": {
    display: "flex",
    width: "10%",
  },
  "& .collapse-parent-grid": {
    position: "relative",
    overflow: "hidden",
  },
  "& .collapse-box": {
    overflowX: "auto",
    flexGrow: 1,
    marginLeft: "3%",
    marginRight: "10%",
    width: "100%",
  },
  "& .header-grid": {
    backgroundColor: "#f4f4f4",
  },
  "& .left-positioned-grid": {
    display: "flex",
    position: "absolute",
    left: 0,
    zIndex: 1001,
    padding: "5px",
    alignItems: "center",
    width: "3%",
    borderRight: "1px solid  #e0e0e0",
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
    justifyContent: "center",
  },
  "& .scrollable-content-grid": {
    display: "flex",
    flexGrow: 1,
    zIndex: 0,
    position: "relative",
    "& .scrollable-box": {
      padding: "4px 10px",
      minWidth: 200,
      textTransform: "capitalize",
      fontFamily: "roboto-bold",
      borderTop: "1px solid #e0e0e0",
      borderBottom: "1px solid #e0e0e0",
      width: "calc(100% - 3% - 10%) !important",
    },
  },
  "& .right-positioned-grid": {
    display: "flex",
    position: "absolute",
    right: 0,
    zIndex: 1001,
    padding: "5px",
    alignItems: "center",
    width: "10%",
    borderLeft: "1px solid #ddd",
    minHeight: 31,
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
  },
}));

export default ReportsStyles;
