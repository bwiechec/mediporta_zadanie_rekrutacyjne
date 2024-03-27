import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ErrorSnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export const ErrorSnackbar = ({
  open,
  message,
  onClose,
}: ErrorSnackbarProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      sx={{ position: "absolute" }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="error"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
