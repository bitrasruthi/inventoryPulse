import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/icons/logo";
import theme from "../styles/theme";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import { paths } from "../routes/paths";
import clsx from "clsx";

const pages = [
  { name: "Dashboard", path: paths.HOME },
  { name: "Inspections", path: paths.INSPECTIONS },
  { name: "Properties", path: paths.PROPERTIES },
  { name: "Team", path: paths.TEAM },
  { name: "Clients", path: paths.CLIENTS },
];
const settings = ["Profile", "Logout"];

function Header() {
  const history = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [selectedMenu, setSelectedMenu] = React.useState<string>("Dashboard");

  React.useEffect(() => {
    if (window.location?.pathname === "/") {
      setSelectedMenu(pages[0]?.name);
    }
  }, [window.location?.pathname]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: any) => {
    setAnchorElNav(null);
    setSelectedMenu(page?.name);
    history(page?.path);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isActiveMenu = (page: string) => {
    return page === selectedMenu;
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        height: 60,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => {
              history(paths.HOME);
            }}
          >
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#111" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page?.name}
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            onClick={() => {
              history(paths.HOME);
            }}
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <img src={LogoImg} style={{ objectFit: "contain" }} />
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, borderRadius: "0" }}
                disableFocusRipple
                disableRipple
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <ExpandMoreIcon sx={{ color: "#111" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                disableFocusRipple
                disableRipple
                key={page?.name}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  mx: 1,
                  color: isActiveMenu(page?.name)
                    ? `${theme.palette.primary.main}`
                    : "black",
                  display: "block",
                  textTransform: "none",
                  borderBottom: isActiveMenu(page?.name)
                    ? `2px solid ${theme.palette.primary.main} !important`
                    : "transparent",
                }}
                className={clsx({
                  "hover:bg-primary hover:text-white rounded-lg": !isActiveMenu(
                    page?.name
                  ),
                })}
              >
                {page?.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <NotificationsNoneIcon sx={{ color: "black", mr: 2 }} />
            <Box
              sx={{
                height: 8,
                width: 8,
                backgroundColor: "red",
                borderRadius: "50%",
                position: "absolute",
                top: 25,
                ml: 1.5,
              }}
            ></Box>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, borderRadius: "0" }}
                disableFocusRipple
                disableRipple
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Box textAlign={"left"} pl={1}>
                  {" "}
                  <Typography color="#111" fontSize={12} fontWeight={700}>
                    User Name{" "}
                  </Typography>{" "}
                  <Typography color="#1D7486" fontSize={12} fontWeight={700}>
                    test@email.com{" "}
                  </Typography>{" "}
                </Box>
                <ExpandMoreIcon sx={{ color: "#111" }} />
              </IconButton>
            </Tooltip>{" "}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
