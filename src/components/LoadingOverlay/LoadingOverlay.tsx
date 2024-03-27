import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingOverlayProps {
  open: boolean;
  withoutBackground?: boolean;
}

export const LoadingOverlay = ({
  open,
  withoutBackground,
}: LoadingOverlayProps) => {
  return (
    <Backdrop
      open={open}
      sx={{
        position: "absolute",
        backgroundColor: `${withoutBackground ? "transparent" : ""}`,
      }}
      data-testid="spinner-backdrop"
    >
      <CircularProgress color="inherit" data-testid="spinner" />
    </Backdrop>
  );
};
