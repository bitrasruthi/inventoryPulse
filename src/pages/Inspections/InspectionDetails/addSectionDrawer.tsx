import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ConfigureSectionDrawer from "./components/configureSectionDrawer";

interface AddSectionDrawerProps {
  isDrawerOpen: boolean;
  onClose: () => void;
}

const drawerWidth = 350;
const appBarHeight = 60;

const sections = [
  { name: "Detailed", description: "Explain common usage", color: "#FF8A80" },
  {
    name: "Schedule of Condition",
    description: "Explain common usage",
    color: "#EA80FC",
  },
  { name: "Checklist", description: "Explain common usage", color: "#1DE9B6" },
  { name: "Rating", description: "Explain common usage", color: "#40C4FF" },
  { name: "Keys", description: "Explain common usage", color: "#64DD17" },
  { name: "Meters", description: "Explain common usage", color: "#795548" },
  { name: "Manuals", description: "Explain common usage", color: "#FF9800" },
];

const detailSections = [
  {
    name: "Custom",
    description: "Explain common usage",
    color: "#FF8A80",
    id: "custom",
  },
  {
    name: "Media",
    description: "Explain common usage",
    color: "#1DE9B6",
    id: "media",
  },
];

interface SectionItemProps {
  name: string;
  description: string;
  color: string;
  onAddClick: () => void;
}

const SectionItem = ({
  name,
  description,
  color,
  onAddClick,
}: SectionItemProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    position="relative"
    border={`2px dotted ${color}`}
    borderRadius={2}
    p={1.5}
    mb={1.5}
  >
    <Box
      sx={{
        backgroundColor: color,
        width: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        position: "absolute",
        left: -2,
        top: 0,
        bottom: 0,
        my: 2,
      }}
    />
    <Box
      flex={1}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Typography variant="body1" sx={{ fontWeight: "roboto-medium" }}>
          {name}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {description}
        </Typography>
      </Box>
      <Box>
        <IconButton sx={{ p: 0 }} onClick={onAddClick}>
          <AddIcon fill={"#FFFFFF"} />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default function AddSectionDrawer({
  isDrawerOpen,
  onClose,
}: AddSectionDrawerProps) {
  const [isConfigureSsctionDialogOpen, setIsConfigureSsctionDialogOpen] =useState(false);

  const handleClickOpen = () => {
    setIsConfigureSsctionDialogOpen(true);
    onClose();
  };

  const handleClose = () => {
    setIsConfigureSsctionDialogOpen(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={onClose}
        sx={{
          zIndex: 9999,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            top: appBarHeight,
            display: "flex",
            flexDirection: "column",
            height: `calc(100vh - ${appBarHeight}px)`,
          },
        }}
        hideBackdrop
      >
        {/* Drawer Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 1,
            boxSizing: "border-box",
          }}
        >
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flex: 1, textAlign: "center", fontFamily: "roboto-bold" }}
          >
            Add New Section
          </Typography>
        </Box>

        {/* Drawer Content */}
        <Box p={2} role="presentation">
          {sections.map((section, index) => (
            <SectionItem
              key={`${index}-${section.name}`}
              {...section}
              onAddClick={handleClickOpen}
            />
          ))}

          <Divider sx={{ my: 3 }} />

          {detailSections.map((section, index) => (
            <SectionItem
              key={`${index}-${section.name}`}
              {...section}
              onAddClick={handleClickOpen}
            />
          ))}
        </Box>
      </Drawer>
      <ConfigureSectionDrawer
        isConfigureSsctionDialogOpen={isConfigureSsctionDialogOpen}
        onClose={handleClose}
      />
    </>
  );
}
