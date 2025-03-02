import { Box, Container, Divider, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoImg from "../../assets/logo.png";

function CompanyLogin() {
  const companyList = [
    {
      role: "clerk",
      name: "Company 1",
      id: "1",
    },
    {
      role: "manager",
      name: "Company 2",
      id: "2",
    },
    {
      role: "admin",
      name: "Company 3",
      id: "3",
    },
  ];

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
        {companyList.map((company, index) => (
          <Box key={company.id}>
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
                  {company.name}
                </Typography>
                <Typography sx={{ opacity: 0.7 }} fontFamily={"roboto-medium"}>
                  {company.role}
                </Typography>
              </Box>
              <LoginIcon fontSize="medium" />
            </Box>
            {index !== companyList.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default CompanyLogin;
