import { createRoot } from "react-dom/client";
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import App from "./App.tsx";
import theme from "./styles/theme.tsx";
import { CustomProvider } from "rsuite";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";


createRoot(document.getElementById("root")!).render(
  <CustomProvider>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        maxSnack={2}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </CustomProvider>
);
