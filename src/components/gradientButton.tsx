import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  label: string;
  menuList?: any;
  isGradient: boolean;
  handleDialogOpen: () => void;
}

const GradientButton: React.FC<Props> = ({
  label,
  menuList = [],
  isGradient,
  handleDialogOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
          position: "absolute",
          top: 5,
          right: 10,
          background: isGradient
            ? "linear-gradient(90deg, #ac42e9, #8542e9)"
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
                handleDialogOpen();
              }}
            >
              {item?.icon && <item.icon />}{" "}
              <Typography fontSize={12} pl={1}>
                {item?.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default GradientButton;
