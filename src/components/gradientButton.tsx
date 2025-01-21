import { Button, Fab, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FullScreenDialog, { CustomButtonProps } from "./fullScreenDialog";
import Filters from "./filters";
import { inspectionFilters } from "../constants/constants";

interface Props {
  label: string;
  menuList?: any;
  isGradient?: boolean;
  handleDialogOpen?: () => void;
}

const GradientButton: React.FC<Props> = ({
  label,
  menuList = [],
  isGradient = true,
  handleDialogOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          top: 5,
          right: 10,
          background: isGradient
            ? "linear-gradient(180deg, #ac42e9, #8542e9)"
            : "#8542e9",
          color: "#fff",
          textTransform: "none",
          minWidth: 150,
          borderRadius: 3,
          fontSize: 13,
        }}
        size="medium"
        onClick={
          menuList && menuList.length > 0 ? handleClick : handleDialogOpen
        }
      >
        {label}
        {menuList && menuList.length > 0 && (
          <KeyboardArrowDownIcon
            sx={{ color: "#fff", ml: 1, width: 20, height: 20 }}
          />
        )}
      </Button>
      <Button
        onClick={handleClick}
        sx={{
          display: { xs: "block", lg: "none" },
          position: "absolute",
          top: 5,
          right: 10,
          background: isGradient
            ? "linear-gradient(180deg, #ac42e9, #8542e9)"
            : "#8542e9",
          color: "#fff",
          textTransform: "none",
          borderRadius: "10px",
          fontSize: 13,
        }}
        size="medium"
        disableRipple
      >
        <AddIcon />
      </Button>

      {window.location.pathname.includes("inspections") && (
        <Fab
          sx={{
            position: "fixed",
            bottom: 30,
            right: 16,
            display: { xs: "block", lg: "none" },
            background: isGradient
              ? "linear-gradient(90deg, #ac42e9, #8542e9)"
              : "#8542e9",
            color: "#fff",
          }}
          aria-label="add"
          onClick={handleOpenDialog}
        >
          <FilterAltIcon />
        </Fab>
      )}

      {menuList && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menuList?.map((item: any, index: number) => (
            <MenuItem
              key={index}
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                handleDialogOpen && handleDialogOpen();
              }}
            >
              {item?.icon && <item.icon />}
              <Typography fontSize={12} pl={1}>
                {item?.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Filters"
          buttons={
            [
              {
                label: "Cancel",
                variant: "outlined",
                onClick: () => console.log("canceled"),
              },
              {
                label: "Confirm",
                variant: "contained",
                onClick: () => console.log("Confirm"),
              },
            ] as CustomButtonProps[]
          }
        >
          <Filters filters={inspectionFilters} />
        </FullScreenDialog>
      )}
    </>
  );
};

export default GradientButton;
