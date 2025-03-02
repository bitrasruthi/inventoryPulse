import {
  Box,
  Button,
  Container,
  Grid2,
  Link,
  Typography,
  Paper,
} from "@mui/material";
import LogoImg from "../../assets/logo.png";
import OutlinedTextField from "../../components/outlinedTextField";
import MailIcon from "../../assets/icons/mailIcon";
import EyeIcon from "../../assets/icons/eyeIcon";
import LockIcon from "../../assets/icons/lockIcon";
import { useFormHook } from "../../hooks/useFormHook";
import validate from "../../helpers/validations";
import { ISignInDtoStrict } from "./types";

type Props = {};

const Login = (props: Props) => {
  const { form } = useFormHook(validate.loginSchema);

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data: ISignInDtoStrict) => {
    console.log("submitted",data);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          p: 2,
          borderRadius: 5,
          width: "75%",
        }}
        elevation={8}
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
            <form onSubmit={handleSubmit(onSubmit)} id={"login-form"}>
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
                  alt="Logo-img"
                  style={{ objectFit: "contain", padding: "14px" }}
                />
                <OutlinedTextField
                  variant="outlined"
                  startAdormentIcon={MailIcon}
                  placeholder="abc@gmail.com"
                  name="email"
                />
                <OutlinedTextField
                  variant="outlined"
                  startAdormentIcon={LockIcon}
                  endAdormentIcon={EyeIcon}
                  placeholder="Enter password"
                  name="password"
                  //helperText={errors && errors.}
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
                      fontFamily: "roboto-medium",
                      opacity: 0.9,
                      color: "black",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Box>
                <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                  Sign In
                </Button>
                <Typography
                  textAlign="center"
                  sx={{ mt: 2, fontFamily: "roboto-regular" }}
                >
                  Don't have an account? &nbsp;
                  <Link
                    href="/register"
                    sx={{
                      textDecoration: "underline",
                      fontFamily: "roboto-medium",
                    }}
                  >
                    Register
                  </Link>
                </Typography>
              </Box>
            </form>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};

export default Login;
