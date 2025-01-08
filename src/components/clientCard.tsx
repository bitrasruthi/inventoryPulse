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
import { inspectionColors, userMenuList } from "../constants/constants";
import PhoneIcon from "../assets/icons/phoneIcon";
import EmailIcon from "../assets/icons/emailIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactIcon from "../assets/icons/contactIcon";
import MenuCommon from "./menuCommon";
interface IProps extends CardProps {
  list: any;
}

export const StyledCard = styled(Card)(() => ({
  border: "none",
  borderRadius: 10,
  minHeight: 120,
  width: "100% !important",
  position: "relative",
  overflow: "hidden",
  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
}));

const ClientCard: React.FC<IProps> = (props) => {
  const { list } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
                      <Avatar
                        sx={{ borderRadius: "50%", width: 50, height: 50 }}
                      />
                      <Box pl={1}>
                        <Box display={"flex"} alignItems={"center"}>
                          <Typography
                            className="roboto-bold"
                            variant="h5"
                            display={"flex"}
                            alignItems={"center"}
                            pr={1}
                          >
                            {item?.companyName}
                          </Typography>
                        </Box>
                        <Typography>{item?.address}</Typography>
                        <Box display={"flex"} gap={2}>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <ContactIcon />
                            <Typography pl={1}>{item?.name}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <PhoneIcon />
                            <Typography pl={1}>{item?.phone}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <EmailIcon />
                            <Typography pl={1}>{item?.email}</Typography>
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
                      <IconButton disableRipple onClick={handleClick}>
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

export default ClientCard;
