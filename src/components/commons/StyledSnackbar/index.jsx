import { Alert, Slide, Snackbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function SlideTransition(props) {
  return <Slide {...props} direction="right" />;
}

StyledSnackbar.propTypes = {
  notify: PropTypes.object,
};

function StyledSnackbar(props) {
  const { notify } = props;
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (notify) setOpen(true);
  }, [notify]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      TransitionComponent={SlideTransition}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert severity={notify?.severity}>
        <Typography variant="subtitle2">{notify?.message}</Typography>
      </Alert>
    </Snackbar>
  );
}

export default StyledSnackbar;
