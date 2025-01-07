import React from "react";
import Dialog from "@mui/material/Dialog";
import Button, { ButtonProps } from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DialogTitleCommon from "./dialogTitleCommon";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export interface CustomButtonProps extends ButtonProps {
  label: string;
}

type FullScreenDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  buttons: CustomButtonProps[];
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
        mt: 7.5,
      }}
      PaperProps={{
        sx: {
          boxShadow: "none",
        },
      }}
      hideBackdrop={true}
    >
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", px: 4, boxShadow: 1 }}
      >
        <DialogTitleCommon title={title} onClose={onClose} />
      </DialogTitle>
      <DialogContent sx={{ flex: 1, overflowY: "auto", p: 2, mt: 1 }}>
        {children}
      </DialogContent>
      <DialogActions
        sx={{
          position: "sticky",
          px: 4,
          display: "flex",
          gap: 2,
          borderTop: 0.5,
          borderColor: "lightgray",
        }}
      >
        {buttons.map((button, index) => (
          <Button key={index} onClick={button.onClick} {...button}>
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
