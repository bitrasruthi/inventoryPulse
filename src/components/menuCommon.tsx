import { Menu, MenuItem, MenuProps, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { IMenuItemExtendProps } from "../helpers/Interfaces";

interface IProps extends MenuProps {
  menuList: IMenuItemExtendProps[];
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
        {menuList?.map((item: IMenuItemExtendProps, _index: number) => (
          <MenuItem
            key={item.key}
            sx={{ display: "flex", alignItems: "center" }}
            onClick={(e) => {
              if (item?.onClick) {
                item?.onClick(e);
              }
              handleClose();
            }}
          >
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
