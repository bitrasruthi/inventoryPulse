import { Button, Container } from "@mui/material";
import { useSnackBar } from "../../context/SnackBarContext";
import {
  GetUserRequestDto,
  UsersControllerClient,
  UsersControllerQuery,
} from "../../api/axios-client";
import { useEffect } from "react";

const Dashboard = () => {
  const getUsers = async () => {
    const body = { page: 1, take: 10 } as GetUserRequestDto;
    var result = await UsersControllerQuery.Client.getUsers(body);
    console.log(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
