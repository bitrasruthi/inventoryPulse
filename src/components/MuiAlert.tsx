import { Alert, AlertProps, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import theme from "../styles/theme";

interface IProps extends AlertProps {
  label: string;
  sx?: SxProps<Theme>;
}

const MuiAlert: FC<IProps> = (props) => {
  const { label, sx } = props;
  return (
    <Alert
      {...props}
      severity="info"
      sx={{
        ...sx,
        borderRadius: "5px",
        p: 0,
        px: 1,
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
