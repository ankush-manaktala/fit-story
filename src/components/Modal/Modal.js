import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ProgressBar from "../ProgressBar";

const Modal = (props) => {
  const {
    title,
    open,
    onClose,
    children,
    OnSubmit,
    progress,
    ActionBtnText = "Submit",
    CancelBtnText = "Cancel",
    showProgress = false,
    showSubmit = true,
    showCancel = true,
  } = props;

  return (
    <React.Fragment>
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={[{ minHeight: 300, minWidth: 550 }]}>
          {showProgress ? <ProgressBar progress={progress} /> : <></>}
          {children}
        </DialogContent>
        <DialogActions>
          {showCancel ? (
            <Button variant="outlined" onClick={onClose}>
              {CancelBtnText}
            </Button>
          ) : (
            <></>
          )}
          {showSubmit ? (
            <Button variant="contained" onClick={OnSubmit}>
              {ActionBtnText}
            </Button>
          ) : (
            <></>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
