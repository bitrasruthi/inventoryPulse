import { Box, Container, Divider, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoImg from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { paths } from "../../routes/paths";

function CompanyLogin() {
  const { userProfile, setUserCustomerRole } = useAuth();

  if (userProfile == undefined) {
    <Navigate to={paths.LOGIN} />;
  }

  const userCustomers = userProfile?.data.userCustomers;

  const handleCustomerRoleSelect = async (
    customerId: string,
    roleId: number
  ) => {
    await setUserCustomerRole(customerId, roleId);
  };

  return (
    <Container maxWidth={"xs"} sx={{ height: "100vh", placeContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={LogoImg}
          alt="Logo-img"
          style={{
            padding: "18px",
          }}
        />
      </Box>
      <Typography fontFamily={"roboto-medium"} textAlign={"center"} my={1}>
        Choose Login Role
      </Typography>
      <Box sx={{ height: "60vh", overflowY: "auto" }}>
        {userCustomers &&
          userCustomers.map((customer, index) => (
            <Box
              key={customer.customerId}
              onClick={() =>
                handleCustomerRoleSelect(customer.customerId, customer.roleId)
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#f6f6f6",
                  },
                  p: 1,
                }}
              >
                <Box>
                  <Typography variant="h6" fontFamily={"roboto-bold"}>
                    {customer.customerName}
                  </Typography>
                  <Typography
                    sx={{ opacity: 0.7 }}
                    fontFamily={"roboto-medium"}
                  >
                    {customer.roleName}
                  </Typography>
                </Box>
                <LoginIcon fontSize="medium" />
              </Box>
              {index !== userCustomers.length - 1 && <Divider />}
            </Box>
          ))}
      </Box>
    </Container>
  );
}

export default CompanyLogin;
