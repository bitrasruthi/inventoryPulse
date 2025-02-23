import { Alert, AlertProps } from "@mui/material";
import { FC } from "react";
import theme from "../styles/theme";

interface IProps extends AlertProps {
  label: string;
}

const MuiAlert: FC<IProps> = (props) => {
  const { label } = props;
  return (
    <Alert
      severity="info"
      sx={{
        backgroundColor: "rgba(248, 244, 255, 1)",
        color: "#111",
        "& .MuiAlert-icon": {
          color: theme.palette.primary.main,
        },
      }}
    >
      {label}
    </Alert>
  );
};

export default MuiAlert;
