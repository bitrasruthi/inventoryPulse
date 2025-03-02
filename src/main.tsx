import { createRoot } from "react-dom/client";
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import App from "./App.tsx";
import theme from "./styles/theme.tsx";
import { CustomProvider } from "rsuite";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SnackBarProvider from "./context/SnackBarContext";
import { setBaseUrl } from "./api/axios-client.ts";
import CustomSnackBar from "./components/customSnackbar.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/loader.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      refetchOnMount: false,
    },
  },
});

setBaseUrl("http://localhost:3000");

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    <SnackBarProvider>
      <CustomProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CustomProvider>
      <CustomSnackBar />
    </SnackBarProvider>
    <Loader />
  </QueryClientProvider>
);
