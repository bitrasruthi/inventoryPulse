import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

export default function useSnackbarService() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //TODO error type ApiException from fetchClient
  const catchErrorSnackbar = (error: any | string | undefined) => {
    let message = "";
    if (error) {
      message = error.message;
    } else {
      message = error ?? "";
    }
    enqueueSnackbar(error, {
      variant: "error",
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: "#FFF" }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  const catchSuccessSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: "#FFF" }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  const catchWarningSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: "warning",
      action: (key) => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: "#111" }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  return {
    catchErrorSnackbar,
    catchSuccessSnackbar,
    catchWarningSnackbar,
  };
}
