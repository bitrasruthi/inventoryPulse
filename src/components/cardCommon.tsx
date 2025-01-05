import {
  Box,
  Card,
  CardProps,
  styled,
  Typography,
  Grid2 as Grid,
  Avatar,
} from "@mui/material";
import React from "react";
import {
  CardTypeEnum,
  InspectionBuildingStatusEnum,
  InspectionBuildngStatusTextEnum,
  InspectionColorEnum,
  InspectionStatusEnum,
  InspectionStatusTextEnum,
} from "../constants/enum";
import BedIcon from "../assets/icons/bedIcon";
import BathIcon from "../assets/icons/bathIcon";
import BarCodeIcon from "../assets/icons/barCodeIcon";
import ContactIcon from "../assets/icons/contactIcon";
import BuildingIcon from "../assets/icons/buildingIcon";
import moment from "moment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "../assets/icons/pendingIcon";
import ReviewIcon from "../assets/icons/reviewIcon";
import { inspectionColors } from "../constants/constants";
import PhoneIcon from "../assets/icons/phoneIcon";
import EmailIcon from "../assets/icons/emailIcon";
import JobTypeIcon from "../assets/icons/jobTypeIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
interface IProps extends CardProps {
  list: any;
  type: number;
}

export const StyledCard = styled(Card)(() => ({
  border: "1px solid #E3E3E3",
  borderRadius: 10,
  minHeight: 120,
  width: "100% !important",
  position: "relative",
  overflow: "hidden",
}));

const CardCommon: React.FC<IProps> = (props) => {
  const { list, type } = props;

  const getNameByBuildingStatus = (status: number) => {
    switch (status) {
      case InspectionBuildingStatusEnum.CheckIn:
        return InspectionBuildngStatusTextEnum.CheckIn;
      case InspectionBuildingStatusEnum.CheckOut:
        return InspectionBuildngStatusTextEnum.CheckOut;
      case InspectionBuildingStatusEnum.InventoryCheckIn:
        return InspectionBuildngStatusTextEnum.InventoryCheckIn;
      default:
        break;
    }
  };

  const getColorByStatus = (status: number) => {
    switch (status) {
      case InspectionStatusEnum.Active:
        return InspectionColorEnum.Green;
      case InspectionStatusEnum.Pending:
        return InspectionColorEnum.Orange;
      case InspectionStatusEnum.InReview:
        return InspectionColorEnum.Blue;
      default:
        break;
    }
  };

  const getNameByStatus = (status: number) => {
    switch (status) {
      case InspectionStatusEnum.Active:
        return (
          <Box
            pt={1}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <CheckCircleIcon
              sx={{
                width: 18,
                height: 18,
                color: InspectionColorEnum.Green,
              }}
            />
            <Typography pl={0.5} fontSize={16} className="roboto-medium">
              {InspectionStatusTextEnum.Active}
            </Typography>
          </Box>
        );
      case InspectionStatusEnum.Pending:
        return (
          <Box
            pt={1}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <PendingIcon fill={InspectionColorEnum.Orange} />
            <Typography pl={0.5} fontSize={16} className="roboto-medium">
              {InspectionStatusTextEnum.Pending}
            </Typography>
          </Box>
        );
      case InspectionStatusEnum.InReview:
        return (
          <Box
            pt={1}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <ReviewIcon fill={InspectionColorEnum.Blue} />
            <Typography pl={0.5} fontSize={16} className="roboto-medium">
              {InspectionStatusTextEnum.InReview}
            </Typography>
          </Box>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {list?.length > 0
          ? list?.map((item: any, index: number) =>
              type === CardTypeEnum.Inspection ? (
                <Grid size={12}>
                  <StyledCard
                    key={index}
                    elevation={0}
                    sx={{ marginBottom: index % item?.length === 0 ? 0 : 2 }}
                    {...props}
                  >
                    <Box
                      sx={{
                        my: 3,
                        background: getColorByStatus(item?.status),
                        width: 7,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        opacity: 0.3,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    ></Box>
                    <Grid p={3} container spacing={1}>
                      <Grid size={10}>
                        <Typography className="roboto-bold" variant="h5">
                          {getNameByBuildingStatus(item?.buildingStatus)}
                        </Typography>
                        <Typography>{item?.address}</Typography>
                        <Box display={"flex"} gap={5}>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <BedIcon />
                            <Typography pl={1}>{item?.beds}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <BathIcon />
                            <Typography pl={1}>{item?.baths}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <BuildingIcon />
                            <Typography pl={1}>{item?.buildingType}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <ContactIcon />
                            <Typography pl={1}>{item?.contact}</Typography>
                          </Box>
                          <Box display={"flex"} py={1} alignItems={"center"}>
                            <BarCodeIcon />
                            <Typography pl={1}>{item?.barCodeNum}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid size={2} textAlign={"right"}>
                        <Typography fontSize={16} className="roboto-medium">
                          {moment(item?.date)?.format("DD MMM YYYY")}
                        </Typography>
                        <Typography fontSize={16} className="roboto-medium">
                          {moment(item?.date)?.format("hh:mm")}
                        </Typography>{" "}
                        <Typography color={getColorByStatus(item?.status)}>
                          {getNameByStatus(item?.status)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </StyledCard>
                </Grid>
              ) : (
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
                              {item?.name}
                            </Typography>
                            <Typography
                              sx={{
                                background: `${
                                  inspectionColors[
                                    index % inspectionColors.length
                                  ]
                                }30`,
                                p: 0.8,
                                fontSize: 14,
                                borderRadius: "10px",
                                color: "inherit !important",
                              }}
                            >
                              {" "}
                              {item?.role}
                            </Typography>
                          </Box>
                          <Box display={"flex"} gap={3}>
                            <Box display={"flex"} py={1} alignItems={"center"}>
                              <PhoneIcon />
                              <Typography pl={1}>{item?.phone}</Typography>
                            </Box>
                            <Box display={"flex"} py={1} alignItems={"center"}>
                              <EmailIcon />
                              <Typography pl={1}>{item?.email}</Typography>
                            </Box>
                            <Box display={"flex"} py={1} alignItems={"center"}>
                              <JobTypeIcon />
                              <Typography pl={1}>{item?.jobType}</Typography>
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
                        <MoreVertIcon sx={{ width: 20, height: 20 }} />
                      </Grid>
                    </Grid>
                  </StyledCard>
                </Grid>
              )
            )
          : "No data"}
      </Grid>
    </>
  );
};

export default CardCommon;
