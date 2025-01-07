import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8542E9",
      light: "#E7D9FB",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#111111",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "roboto-regular, sans-serif",
  },
  components: {
    MuiButton: {},
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "roboto-bold !important",
        },
      },
    },
  },
});

export default theme;
