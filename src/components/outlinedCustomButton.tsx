import {
  Button,
  Menu,
  MenuItem,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  label: string;
  menuList?: any;
  handleAction?: () => void;
  backgroundColor?: string;
  color?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const OutlinedCustomButton: React.FC<Props> = ({
  label,
  menuList = [],
  handleAction,
  backgroundColor = "#fff",
  color = "#111",
  Icon,
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
      {menuList?.length > 0 ? (
        <Button
          onClick={handleClick}
          sx={{
            background: backgroundColor ? backgroundColor : "#111",
            color: color ? color : "#111",
            border: `1px solid #111`,
            textTransform: "none",
            borderRadius: "10px",
            fontSize: 13,
            height: 40,
          }}
          size="medium"
          disableRipple
        >
          {Icon && <Icon />}
          {label}
          {menuList && menuList.length > 0 && (
            <KeyboardArrowDownIcon sx={{ ml: 1, width: 20, height: 20 }} />
          )}
        </Button>
      ) : (
        <Button
          onClick={handleAction}
          sx={{
            background: backgroundColor ? backgroundColor : "#111",
            color: color ? color : "#111",
            border: `1px solid #111`,
            textTransform: "none",
            borderRadius: "10px",
            fontSize: 13,
            height: 40,
          }}
          size="medium"
          disableRipple
        >
          {Icon && <Icon />}
          {label}
          {menuList && menuList.length > 0 && (
            <KeyboardArrowDownIcon sx={{ ml: 1, width: 20, height: 20 }} />
          )}
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
          {menuList?.map((item: any, index: number) => (
            <MenuItem
              key={index}
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                handleAction && handleAction();
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
    </>
  );
};

export default OutlinedCustomButton;
