import {
  Box,
  Card,
  CardProps,
  styled,
  Typography,
  Grid2 as Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { inspectionColors } from "../../constants/constants";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuCommon from "../../components/menuCommon";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  IMenuItemExtendProps,
  PropertyDetailsFormValues,
} from "../../helpers/Interfaces";
import BedIcon from "../../assets/icons/bedIcon";
import BathIcon from "../../assets/icons/bathIcon";
import HospitalIcon from "../../assets/icons/roomsIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UseFormReturn } from "react-hook-form";

export const StyledCard = styled(Card)(() => ({
  border: "none",
  borderRadius: 10,
  minHeight: 120,
  width: "100% !important",
  position: "relative",
  overflow: "hidden",
  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
}));

interface IProps extends CardProps {
  list: any;
  formProps: UseFormReturn<PropertyDetailsFormValues>;
}

const PropertyList: React.FC<IProps> = (props) => {
  const { list, formProps } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selectedUser, setSelectedUser] = useState<any>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickView = () => {
    console.log("view", selectedUser);
  };

  const handleClickEdit = () => {
    console.log("edit", selectedUser);
  };

  const handleClickDelete = () => {
    console.log("delete", selectedUser);
  };

  const userMenuList: IMenuItemExtendProps[] = [
    {
      key: 1,
      label: "View",
      icon: VisibilityOutlinedIcon,
      onClick: (_e) => handleClickView(),
    },
    {
      key: 2,
      label: "Edit",
      icon: EditOutlinedIcon,
      onClick: (_e) => handleClickEdit(),
    },
    {
      key: 3,
      label: "Delete",
      icon: DeleteOutlineIcon,
      onClick: (_e) => handleClickDelete(),
    },
  ];

  return (
    <>
      <Grid container spacing={1} columnSpacing={3} mt={3}>
        {list?.length > 0
          ? list?.map((item: any, index: number) => (
              <Grid size={{ xs: 12, lg: 6 }} key={index}>
                <StyledCard
                  key={index}
                  elevation={0}
                  sx={{ marginBottom: index % item?.length === 0 ? 0 : 2 }}
                >
                  <Box
                    sx={{
                      my: 4,
                      background:
                        inspectionColors[index % inspectionColors.length],
                      width: 7,
                      opacity: 0.3,
                      position: "absolute",
                      borderRadius: 10,
                      left: 2,
                      top: 0,
                      bottom: 0,
                    }}
                  ></Box>
                  <Grid container spacing={2} p={2.75}>
                    <Grid size={11} display={"flex"} alignItems={"center"}>
                      <Avatar sx={{ borderRadius: 1, width: 68, height: 68 }} />
                      <Box pl={1}>
                        <Typography
                          display={"flex"}
                          alignItems={"center"}
                          pr={1}
                        >
                          {item?.address}
                        </Typography>
                        <Box
                          display={{ xs: "block", md: "flex" }}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Box
                            display={"flex"}
                            flexWrap={"wrap"}
                            gap={{ xs: 1, md: 3 }}
                            py={1}
                          >
                            <Box display={"flex"} alignItems={"center"}>
                              <BedIcon />
                              <Typography pl={1}>{item?.beds}</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                              <BathIcon />
                              <Typography pl={1}>{item?.baths}</Typography>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                              <HospitalIcon />
                              <Typography pl={1}>{item?.rooms}</Typography>
                            </Box>
                          </Box>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            flexWrap={"wrap"}
                            gap={1}
                          >
                            {" "}
                            {item.garden && (
                              <>
                                <CheckCircleIcon
                                  sx={{
                                    width: 18,
                                    height: 18,
                                    color: "primary.main",
                                    mr: 0.5,
                                  }}
                                />
                                Garage
                              </>
                            )}
                            {item.parkingSlot && (
                              <>
                                <CheckCircleIcon
                                  sx={{
                                    width: 18,
                                    height: 18,
                                    color: "primary.main",
                                    mr: 0.5,
                                  }}
                                />
                                Parking Slot
                              </>
                            )}
                            {item.garage && (
                              <>
                                <CheckCircleIcon
                                  sx={{
                                    width: 18,
                                    height: 18,
                                    color: "primary.main",
                                    mr: 0.5,
                                  }}
                                />
                                Garden
                              </>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      size={1}
                      justifyContent={"right"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <IconButton
                        disableRipple
                        onClick={(e) => {
                          setSelectedUser(item);
                          handleClick(e);
                        }}
                      >
                        <MoreVertIcon sx={{ width: 20, height: 20 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </StyledCard>
              </Grid>
            ))
          : "No data"}
        <MenuCommon
          anchor={anchorEl}
          menuList={userMenuList}
          setAnchor={setAnchorEl}
          open={open}
        ></MenuCommon>
      </Grid>
    </>
  );
};

export default PropertyList;
