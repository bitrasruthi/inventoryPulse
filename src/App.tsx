import CustomSnackBar from "./components/customSnackbar";
import SnackBarProvider from "./context/SnackBarContext";
import MainRouter from "./routes/mainRouter";

function App() {
  return (
    <>
      <SnackBarProvider>
        <MainRouter />
        <CustomSnackBar />
      </SnackBarProvider>
    </>
  );
}

export default App;
