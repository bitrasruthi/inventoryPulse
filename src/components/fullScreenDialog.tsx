import React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

// type ButtonColor =
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning";

type ButtonProps = {
  label: string;
  onClick: () => void;
  // color?: string | ButtonColor;
};

type FullScreenDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  buttons: ButtonProps[];
  children: React.ReactNode;
};

const FullScreenDialog: React.FC<FullScreenDialogProps> = ({
  open,
  onClose,
  title,
  children,
  buttons,
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DialogTitle sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton edge="start">
            <ArrowBackIosNewIcon
              onClick={onClose}
              aria-label="close"
              fontSize="small"
              sx={{
                color: "white",
                backgroundColor: "#8542E9",
                borderRadius: 1,
              }}
            />
          </IconButton>

          <Typography sx={{ ml: 2, flex: 1, fontWeight: "bold" }}>
            {title}
          </Typography>
        </Toolbar>
      </DialogTitle>
      <DialogContent sx={{ flex: 1, overflowY: "auto" }}>
        <Typography variant="body1" sx={{ p: 2 }}>
          {children}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          position: "sticky",
          bottom: 0,
          background: "white",
          display: "flex",
          gap: 2,
          p: 2,
        }}
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.onClick}
            // color={button.color || "primary"}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 1,
              padding: "8px 16px",
            }}
          >
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
