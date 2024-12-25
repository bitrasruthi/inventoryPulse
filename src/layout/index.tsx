// @packages
import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "@mui/material";

const Layout: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box position={"relative"} minHeight={"100vh"}>
      <Box mb={3}>
        <Header />
      </Box>
      <Container maxWidth={"xl"}>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
