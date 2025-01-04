import {
  Box,
  Card,
  CardProps,
  styled,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import React from "react";
import { inspectionColors } from "../constants/constants";
import {
  CardTypeEnum,
  InspectionBuildingStatusEnum,
  InspectionBuildngStatusTextEnum,
  InspectionStatusEnum,
  InspectionStatusTextEnum,
} from "../constants/enum";
import BedIcon from "../assets/icons/bedIcon";
import BathIcon from "../assets/icons/bathIcon";
import BarCodeIcon from "../assets/icons/barCodeIcon";
import ContactIcon from "../assets/icons/contactIcon";
import BuildingIcon from "../assets/icons/buildingIcon";
import moment from "moment";

interface IProps extends CardProps {
  list: any;
  type: number;
}

export const StyledCard = styled(Card)(({ theme }) => ({
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

  const getNameByStatus = (status: number) => {
    switch (status) {
      case InspectionStatusEnum.Active:
        return InspectionStatusTextEnum.Active;
      case InspectionStatusEnum.Pending:
        return InspectionStatusTextEnum.Pending;
      case InspectionStatusEnum.InReview:
        return InspectionStatusTextEnum.InReview;
      default:
        break;
    }
  };

  return (
    <>
      {list?.length > 0
        ? list?.map((item: any, index: number) =>
            type === CardTypeEnum.Inspection ? (
              <StyledCard
                key={index}
                elevation={0}
                sx={{ marginBottom: index % item?.length === 0 ? 0 : 2 }}
                {...props}
              >
                <Box
                  sx={{
                    my: 3,
                    background:
                      inspectionColors[index % inspectionColors.length],
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
                    {/* <Typography>{moment(item?.)}</Typography> */}
                  </Grid>
                </Grid>
              </StyledCard>
            ) : (
              <StyledCard
                key={index}
                elevation={0}
                sx={{ marginBottom: index % item?.length === 0 ? 0 : 2 }}
              >
                <Box
                  sx={{
                    my: 3,
                    background:
                      inspectionColors[index % inspectionColors.length],
                    width: 7,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    opacity: 0.3,
                  }}
                ></Box>
                <Box p={3}>
                  <Typography className="roboto-bold" variant="h5">
                    {getNameByStatus(item?.status)}
                  </Typography>
                  <Typography>{item?.address}</Typography>
                </Box>
              </StyledCard>
            )
          )
        : "No data"}
    </>
  );
};

export default CardCommon;
