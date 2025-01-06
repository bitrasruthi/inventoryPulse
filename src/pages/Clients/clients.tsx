import { Box, Typography } from "@mui/material";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import GradientButton from "../../components/gradientButton";
import { useState } from "react";
import AddClient from "./addClient";

type Props = {};

const Clients = (props: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <GradientButton
        label="Add Client"
        menuList={[""]}
        isGradient={true}
        hasMenu={false}
        handleDialogOpen={handleOpenDialog}
      />
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add Client"
          buttons={
            [
              {
                label: "Cancel",
                variant: "outlined",
                onClick: () => console.log("canceled"),
              },
              {
                label: "Confirm",
                variant: "contained",
                onClick: () => console.log("Confirm"),
              },
            ] as CustomButtonProps[]
          }
        >
          <Typography variant="body1" sx={{ p: 2 }}>
            <AddClient />
          </Typography>
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Clients;
