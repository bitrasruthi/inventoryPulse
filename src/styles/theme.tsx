import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8542E9",
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
  },
});

export default theme;
