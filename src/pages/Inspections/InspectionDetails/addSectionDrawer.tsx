import { Drawer, Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

interface AddSectionDrawerProps {
  isDrawerOpen: boolean;
  onClose: () => void;
}

function AddSectionDrawer({ isDrawerOpen, onClose }: AddSectionDrawerProps) {
  const sections = [
    { name: "Detailed", description: "Explain common usage", color: "#FF8A80" },
    {
      name: "Schedule of Condition",
      description: "Explain common usage",
      color: "#EA80FC",
    },
    {
      name: "Checklist",
      description: "Explain common usage",
      color: "#1DE9B6",
    },
    { name: "Rating", description: "Explain common usage", color: "#40C4FF" },
    { name: "Keys", description: "Explain common usage", color: "#64DD17" },
    { name: "Meters", description: "Explain common usage", color: "#795548" },
    { name: "Manuals", description: "Explain common usage", color: "#FF9800" },
  ];

  const detailSections = [
    { name: "Detailed", description: "Explain common usage", color: "#FF8A80" },
    {
      name: "Schedule of Condition",
      description: "Explain common usage",
      color: "#EA80FC",
    },
    {
      name: "Checklist",
      description: "Explain common usage",
      color: "#1DE9B6",
    },
  ];

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={onClose}>
      <Box width={350} p={2} role="presentation">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", flex: 1, textAlign: "center" }}
          >
            Add New Section
          </Typography>
          <Box width={40} />
        </Box>
        {sections.map((section, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="relative"
            border={`2px dotted ${section.color}`}
            borderRadius={2}
            p={2}
                mb={1.5}
          >
            <Box
              sx={{
                my: 2,
                backgroundColor: section.color,
                width: 5,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            ></Box>
            <Box flex={1} ml={1}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {section.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {section.description}
              </Typography>
            </Box>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Box>
        ))}
        <Divider sx={{ my: 2 }} />
        {detailSections.map((section, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="relative"
            border={`2px dotted ${section.color}`}
            borderRadius={2}
            p={2}
            mb={1.5}
          >
            <Box
              sx={{
                my: 2,
                backgroundColor: section.color,
                width: 5,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            ></Box>
            <Box flex={1} ml={1}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {section.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {section.description}
              </Typography>
            </Box>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
}

export default AddSectionDrawer;
