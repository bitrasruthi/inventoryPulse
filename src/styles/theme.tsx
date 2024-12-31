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
    fontFamily: "lexend-regular",
  },
  components: {
    MuiButton: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `5px solid green !important`,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `5px dotted red !important`,
            },
          },
        },
      },
    },
  },
});

export default theme;
