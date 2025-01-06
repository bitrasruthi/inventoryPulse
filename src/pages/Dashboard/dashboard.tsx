import React, { useState } from "react";
import {
  ButtonBaseProps,
  ButtonProps,
  Container,
  Typography,
} from "@mui/material";
import { Button } from "rsuite";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import SaveProperty from "../Properties/saveProperty";

const Dashboard = () => {
  // const actionButtons = [
  //   { label: 'Disagree', onClick: handleDisagree, variant: 'contained' },
  //   { label: 'Agree', onClick: handleAgree },
  // ] as ButtonProps;

  return (
    <Container>
      <h1>Dashboard</h1>
      <Button appearance="primary">Primary</Button>
    </Container>
  );
};

export default Dashboard;
