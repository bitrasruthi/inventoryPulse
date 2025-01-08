import { Menu, MenuItem, MenuProps, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { viewMenuInterface } from "../helpers/Interfaces";

interface IProps extends MenuProps {
  menuList: viewMenuInterface[];
  setAnchor: Dispatch<SetStateAction<HTMLElement | null>>;
  anchor: any;
  open: boolean;
}

const MenuCommon: React.FC<IProps> = (props) => {
  const { menuList, open, setAnchor, anchor } = props;

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <Menu
        {...props}
        id="basic-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuList?.map((item: any, index: number) => (
          <MenuItem key={index} sx={{ display: "flex", alignItems: "center" }}>
            {item?.icon && <item.icon sx={{ width: 18, height: 18 }} />}
            <Typography fontSize={12} pl={1}>
              {item?.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuCommon;
