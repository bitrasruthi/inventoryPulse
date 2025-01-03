import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import theme from "./styles/theme.tsx";
import { ThemeProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
