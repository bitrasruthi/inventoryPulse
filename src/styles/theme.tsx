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
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            background: "linear-gradient(180deg, #ac42e9, #8542e9) !important",
            color: "#FFFFFF",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            background: "grey",
            color: "#FFFFFF",
            border: "none",
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
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
