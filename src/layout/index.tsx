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
      <Box>
        <Header />
      </Box>
      <Box sx={{ paddingBottom: "501px", backgroundColor: "#f5f5f5", pt: 3 }}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
