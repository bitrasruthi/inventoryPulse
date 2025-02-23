import { styled, Box } from "@mui/material";

const ReportsSettingsStyles = styled(Box)(({ theme }) => ({
  padding: 20,
  "& .parent-container": {
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
}));

export default ReportsSettingsStyles;
