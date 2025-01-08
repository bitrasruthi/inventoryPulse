import {
  Box,
  Card,
  CardProps,
  styled,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import React from "react";
import {
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
interface IProps extends CardProps {
  list: any;
}

export const StyledCard = styled(Card)(() => ({
  border: "1px solid #E3E3E3",
  borderRadius: 10,
  minHeight: 120,
  width: "100% !important",
  position: "relative",
  overflow: "hidden",
}));

const InspectionCard: React.FC<IProps> = (props) => {
  const { list } = props;

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
      <Grid container spacing={0}>
        {list?.length > 0
          ? list?.map((item: any, index: number) => (
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
                  <Grid p={2} container spacing={1}>
                    <Grid size={{ xs: 12, lg: 10 }}>
                      <Typography className="roboto-bold" variant="h5">
                        {getNameByBuildingStatus(item?.buildingStatus)}
                      </Typography>
                      <Typography>{item?.address}</Typography>
                      <Box
                        display={"flex"}
                        gap={{ xs: 1, lg: 5 }}
                        flexWrap={"wrap"}
                      >
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
                    <Grid
                      size={{ xs: 12, lg: 2 }}
                      textAlign={{ xs: "left", lg: "right" }}
                    >
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
            ))
          : "No data"}
      </Grid>
    </>
  );
};

export default InspectionCard;
