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
            fontSize: 14,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            background: "grey",
            color: "#FFFFFF",
            border: "none",
            fontSize: 14,
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
          minWidth: 140,
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
