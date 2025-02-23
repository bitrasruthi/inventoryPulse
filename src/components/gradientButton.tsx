import { Button, Fab, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FullScreenDialog, { CustomButtonProps } from "./fullScreenDialog";
import Filters from "./filters";
import { inspectionFilters } from "../constants/constants";

interface Props {
  label: string;
  menuList?: any;
  isGradient?: boolean;
  handleAction?: () => void;
}

const GradientButton: React.FC<Props> = ({
  label,
  menuList = [],
  isGradient = true,
  handleAction,
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
          display: "block",
          background: isGradient
            ? "linear-gradient(180deg, #ac42e9, #8542e9)"
            : "#8542e9",
          color: "#fff",
          textTransform: "none",
          minWidth: 150,
          width: { xs: "100%", sm: "auto" },
          borderRadius: 3,
          height: 40,
        }}
        size="medium"
        onClick={menuList && menuList.length > 0 ? handleClick : handleAction}
      >
        {label}
        {menuList && menuList.length > 0 && (
          <KeyboardArrowDownIcon
            sx={{ color: "#fff", ml: 1, width: 20, height: 20 }}
          />
        )}
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
                handleAction && handleAction();
                handleClose();
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
