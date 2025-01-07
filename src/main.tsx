import { createRoot } from "react-dom/client";
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import App from "./App.tsx";
import theme from "./styles/theme.tsx";
import { CustomProvider } from "rsuite";
import { ThemeProvider } from "@mui/material/styles";
import { CommonProvider } from "./context/CommonContext.tsx";

createRoot(document.getElementById("root")!).render(
  <CustomProvider>
    <CommonProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CommonProvider>
  </CustomProvider>
);
