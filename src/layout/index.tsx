// @packages
import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const Layout: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Box position={"relative"} minHeight={"100vh"}>
      <Box mb={5}>
        <Header />
      </Box>
      <Box sx={{ height: "inherit" }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
