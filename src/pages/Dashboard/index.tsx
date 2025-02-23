import { Button, Container } from "@mui/material";
import { useSnackBar } from "../../context/SnackBarContext";

const Dashboard = () => {
  const { showSnackBar } = useSnackBar();
  return (
    <Container>
      <h1>Dashboard</h1>
      <Button
        onClick={() => {
          showSnackBar(true, "data saved successfully", "success");
        }}
      >
        Show Success Toast
      </Button>
      <Button
        onClick={() => {
          showSnackBar(true, "data save error", "error");
        }}
      >
        Show Error Toast
      </Button>
    </Container>
  );
};

export default Dashboard;
