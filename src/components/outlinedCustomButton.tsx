import { Button, ButtonProps, Menu, MenuItem, Typography } from "@mui/material";
import React, { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IProps extends ButtonProps {
  label: string;
  menuList?: any;
  handleAction?: () => void;
  fillColor?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  height?: number;
  width?: number;
  fontSize?: number | string;
}

const OutlinedCustomButton: React.FC<IProps> = (props) => {
  const {
    label,
    menuList = [],
    handleAction,
    fillColor,
    endIcon,
    startIcon,
    height = 40,
    width = { xs: "100%", sm: "auto" },
    fontSize = "14px",
    ...btnProps
  } = props;
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
      {menuList?.length > 0 ? (
        <Button
          {...btnProps}
          onClick={handleClick}
          sx={{
            background: fillColor ? "#111" : "#fff",
            color: fillColor ? "#fff" : "#111",
            border: `1px solid #111`,
            textTransform: "none",
            borderRadius: "10px",
            fontFamily: "roboto-medium",
            height: height || 40,
            minWidth: 150,
            width: width || { xs: "100%", sm: "auto" },
          }}
          size="medium"
          disableRipple
          endIcon={
            endIcon
              ? endIcon
              : menuList &&
                menuList.length > 0 && (
                  <KeyboardArrowDownIcon
                    sx={{ ml: 1, width: 20, height: 20 }}
                  />
                )
          }
          startIcon={startIcon}
        >
          {label}
        </Button>
      ) : (
        <Button
          onClick={handleAction}
          sx={{
            mr: 1,
            background: fillColor ? "#111" : "#fff",
            color: fillColor ? "#fff" : "#111",
            border: `1px solid #111`,
            textTransform: "none",
            borderRadius: "10px",
            fontFamily: "roboto-medium",
            width: { xs: "100%", sm: "auto" },
          }}
          size="medium"
          disableRipple
          endIcon={
            endIcon
              ? endIcon
              : menuList &&
                menuList.length > 0 && (
                  <KeyboardArrowDownIcon
                    sx={{ ml: 1, width: 20, height: 20 }}
                  />
                )
          }
          startIcon={startIcon}
        >
          {label}
        </Button>
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
          {menuList &&
            menuList?.map((item: any, index: number) => (
              <MenuItem
                key={index}
                sx={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  if (handleAction) {
                    handleAction();
                  }
                }}
              >
                {item?.icon && item?.icon}
                <Typography fontSize={12} pl={1}>
                  {item?.label ? item.label : item?.name ? item.name : ""}
                </Typography>
              </MenuItem>
            ))}
        </Menu>
      )}
    </>
  );
};

export default OutlinedCustomButton;
