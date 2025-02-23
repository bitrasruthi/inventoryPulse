import SectionTitleCommon from "./sectionTitleCommon";
import LocationHomeIcon from "../assets/icons/locationHomeIcon";
import { Box, Typography } from "@mui/material";
import EditIcon from "../assets/icons/editIcon";

const InspectionAddress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        padding: 1,
        border: "1px solid #E0E0E0",
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
        <Box
          sx={{
            display: "inline-block",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "roboto-bold",
              fontSize: "16px",
              fontWeight: 500,
              color: "#333333",
              lineHeight: 1,
              display: "block",
            }}
          >
            115-116, Beaverbrook Town House,
          </Typography>
          <Typography
            sx={{
              fontFamily: "roboto",
              fontSize: "12px",
              fontWeight: 400,
              color: "#333333",
              lineHeight: 1,
              display: "block",
            }}
          >
            Sloane St, London SW16 9PJ, UK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InspectionAddress;
