import { useContext } from "react";
import { useState, createContext } from "react";
import { ISnackBarContextType } from "../types/type";

const SnackBarContext = createContext<ISnackBarContextType>({
  snackBarState: {
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarSeverity: "success",
  },
  showSnackBar: () => {},
});

function SnackBarProvider({ children }) {
  const [snackBarState, setSnackBarstate] = useState({
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarSeverity: "success" as "success" | "error",
  });

  const showSnackBar = (
    isOpen: boolean,
    message: string,
    severity: "success" | "error"
  ) => {
    var obj = {
      snackbarOpen: isOpen,
      snackbarMessage: message,
      snackbarSeverity: severity,
    };

    setSnackBarstate({ ...obj });
  };

  const contextValue: ISnackBarContextType = {
    snackBarState,
    showSnackBar: showSnackBar,
  };

  return (
    <SnackBarContext.Provider value={contextValue}>
      {children}
    </SnackBarContext.Provider>
  );
}
export function useSnackBar() {
  const context = useContext<ISnackBarContextType>(SnackBarContext);
  return context;
}

export default SnackBarProvider;
