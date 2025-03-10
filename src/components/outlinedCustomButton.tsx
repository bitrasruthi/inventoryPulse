import { Button, ButtonProps, Menu, MenuItem, Typography } from "@mui/material";
import React, { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IProps extends ButtonProps {
  label: string;
  menuList?: any[];
  handleAction?: () => void;
  fillColor?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  height?: number;
  width?: number;
  fontSize?: string;
}

const OutlinedCustomButton: React.FC<IProps> = (props) => {
  const {
    label,
    menuList = [],
    handleAction,
    fillColor,
    endIcon,
    startIcon,
    onClick,
    ...btnProps
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (menuList.length > 0) {
      setAnchorEl(event.currentTarget);
    } else if (onClick) {
      onClick(event);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          background: fillColor ? "#111" : "#fff",
          color: fillColor ? "#fff" : "#111",
          border: "1px solid #111",
          textTransform: "none",
          borderRadius: "10px",
          fontFamily: "roboto-medium",
          height: 40,
          minWidth: 80,
          width: { xs: "100%", sm: "auto" },
          px: 2,
          ...btnProps.sx,
        }}
        size="medium"
        endIcon={
          endIcon ||
          (menuList.length > 0 && (
            <KeyboardArrowDownIcon sx={{ ml: 1, width: 20, height: 20 }} />
          ))
        }
        startIcon={startIcon}
      >
        {label}
      </Button>

      {menuList.length > 0 && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menuList.map((item, index) => (
            <MenuItem
              key={index}
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                if (handleAction) handleAction();
                handleClose();
              }}
            >
              {item.icon && item.icon}
              <Typography fontSize={12} pl={1}>
                {item.label || item.name || ""}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default OutlinedCustomButton;
