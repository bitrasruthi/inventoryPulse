import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Button } from "rsuite";
import FullScreenDialog from "../../components/fullScreenDialog";

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleAgree = () => {
    console.log("Agree clicked");
    setDialogOpen(false);
  };

  const handleDisagree = () => {
    console.log("Disagree clicked");
    setDialogOpen(false);
  };

  const actionButtons = [
    { label: "Disagree", onClick: handleDisagree },
    { label: "Agree", onClick: handleAgree },
  ];

  return (
    <Container>
      <h1>Dashboard</h1>
      <Button appearance="primary" onClick={handleOpenDialog}>
        Primary
      </Button>
      <FullScreenDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Add Inspection"
        buttons={actionButtons}
      >
        <Typography variant="body1" sx={{ p: 2 }}>
          This is the content of the dialog passed as children.
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
          To make Typography bold in Material-UI, the fontWeight property must be applied correctly. However, when you're using the sx prop, you don't need to add !important like in plain CSS because sx already has higher specificity
        </Typography>
      </FullScreenDialog>
    </Container>
  );
};

export default Dashboard;
