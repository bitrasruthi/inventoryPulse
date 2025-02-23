import CustomSnackBar from "./components/customSnackbar";
import SnackBarProvider from "./context/SnackBarContext";
import MainRouter from "./routes/mainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <SnackBarProvider>
        <MainRouter />
        <CustomSnackBar />
      </SnackBarProvider>
    </QueryClientProvider>
  );
}

export default App;
