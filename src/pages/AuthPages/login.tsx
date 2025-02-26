import { Box, Button, Container, Grid2, Link, Typography } from "@mui/material";
import LogoImg from "../../assets/logo.png";
import OutlinedTextField from "../../components/outlinedTextField";
import MailIcon from "../../assets/icons/mailIcon";
import EyeIcon from "../../assets/icons/eyeIcon";
import LockIcon from "../../assets/icons/lockIcon";

type Props = {};

const Login = (props: Props) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: 4,
          boxShadow: 3,
          width: "80%",
          textAlign: "center",
        }}
      >
        <Grid2 container spacing={6} alignItems="center">
          {/* Left Side (Poster) */}
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img src="/loginPoster.png" alt="Login Poster" width="100%" />
          </Grid2>

          {/* Right Side (Login Form) */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={LogoImg}
                alt="Login Poster"
                height="80%"
                width="70%"
                style={{ objectFit: "contain", padding: "20px" }}
              />
              <OutlinedTextField
                variant="outlined"
                startAdormentIcon={MailIcon}
                placeholder="abc@gmail.com"
                isnotboldtext={true}
              />
              <OutlinedTextField
                variant="outlined"
                startAdormentIcon={LockIcon}
                endAdormentIcon={EyeIcon}
                placeholder="Enter password"
                isnotboldtext={true}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Link
                  href="/forget-password"
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    color: "black",
                    opacity: 0.9,
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                Sign In
              </Button>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                Don't have an account?{" "}
                <Link
                  href="/register"
                  sx={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Login;
