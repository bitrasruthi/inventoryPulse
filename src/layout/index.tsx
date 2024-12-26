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
    <Box
      position={"relative"}
      height={"100vh"}
      overflow={"hidden"}
      sx={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box sx={{ pt: 3 }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
