import { Container } from "@mui/material";
import { Button } from "rsuite";

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
