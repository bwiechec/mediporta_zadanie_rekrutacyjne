import Box from "@mui/material/Box";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import Typography from "@mui/material/Typography";

interface NoTagsFoundProps {
  isPreviousData: boolean;
}

const NoTagsFound = ({ isPreviousData }: NoTagsFoundProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        width: "100%",
        textAlign: "center",
        position: "relative",
        py: 2,
      }}
    >
      {!isPreviousData && <Typography>No tags found</Typography>}
      <LoadingOverlay open={isPreviousData} withoutBackground={true} />
    </Box>
  );
};

export default NoTagsFound;
