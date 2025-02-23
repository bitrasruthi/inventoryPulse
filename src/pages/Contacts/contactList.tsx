import {
  Box,
  Card,
  CardProps,
  styled,
  Typography,
  Grid2 as Grid,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { inspectionColors } from "../../constants/constants";
import PhoneIcon from "../../assets/icons/primaryPhoneIcon";
import EmailIcon from "../../assets/icons/primaryEmailIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "../../assets/icons/deleteIcon";
import GradientButton from "../../components/gradientButton";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import { useFormHook } from "../../hooks/useFormHook";
import AddContact from "./addContact";
import validate from "../../helpers/validations";

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

const ContactList: React.FC<IProps> = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { list } = props;

  const { form } = useFormHook(validate.propertyDetailsSchema);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <GradientButton label="Add Contact" handleAction={handleOpenDialog} />
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
                            {item?.role}
                          </Typography>
                        </Box>
                        <Box
                          display={"flex"}
                          flexWrap={"wrap"}
                          gap={{ xs: 1, md: 3 }}
                          py={1}
                        >
                          <Box display={"flex"} alignItems={"center"}>
                            <PhoneIcon />
                            <Typography pl={1}>{item?.phone}</Typography>
                          </Box>
                          <Box display={"flex"} alignItems={"center"}>
                            <EmailIcon />
                            <Typography pl={1}>{item?.email}</Typography>
                          </Box>
                        </Box>
                        <Box
                          display={"flex"}
                          flexWrap={"wrap"}
                          gap={{ xs: 1, md: 3 }}
                        >
                          <Box className={"flex-align-center"}>
                            <CheckCircleIcon
                              sx={{
                                width: 18,
                                height: 18,
                                color: "primary.main",
                                mr: 0.5,
                              }}
                            />{" "}
                            Signee
                          </Box>
                          <Box className={"flex-align-center"}>
                            <CheckCircleIcon
                              sx={{
                                width: 18,
                                height: 18,
                                color: "primary.main",
                                mr: 0.5,
                              }}
                            />{" "}
                            Notify of conduct date
                          </Box>
                          <Box className={"flex-align-center"}>
                            <CheckCircleIcon
                              sx={{
                                width: 18,
                                height: 18,
                                color: "primary.main",
                                mr: 0.5,
                              }}
                            />{" "}
                            Deliver completed report
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
                      <DeleteIcon />
                    </Grid>
                  </Grid>
                </StyledCard>
              </Grid>
            ))
          : "No data"}
      </Grid>
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add Contact"
          buttons={
            [
              {
                label: "Close",
                variant: "outlined",
                onClick: () => console.log("canceled"),
              },
              {
                label: "Add",
                variant: "contained",
                onClick: () => console.log("Confirm"),
              },
            ] as CustomButtonProps[]
          }
        >
          <AddContact formProps={form} />
        </FullScreenDialog>
      )}
    </>
  );
};

export default ContactList;
