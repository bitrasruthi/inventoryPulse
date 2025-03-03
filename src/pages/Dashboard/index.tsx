import { Button, Container } from "@mui/material";
import { useSnackBar } from "../../context/SnackBarContext";
import {
  ClientControllerQuery,
  GetUserRequestDto,
  PaginationRequest,
  StaticControllerQuery,
} from "../../api/axios-client";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    data,
    isPending,
    isError,
    mutate: getClientsPage,
  } = ClientControllerQuery.useGetClientsMutation();

  const getClients = () => {
    getClientsPage(new PaginationRequest({ page: 0, take: 10 }));
  };

  useEffect(() => {
    //getClients();
  }, []);

  const { showSnackBar } = useSnackBar();

  console.log(data);

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
