import { IconButton, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface PaginationProps {
  hasMore: boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  hasMore,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageUpChange = () => {
    if (hasMore) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageDownChange = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Stack direction="row" alignItems={"center"} justifyContent="center">
      <IconButton
        onClick={handlePageDownChange}
        sx={{ visibility: currentPage <= 1 ? "hidden" : "visible" }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Typography>{currentPage}</Typography>
      <IconButton
        onClick={handlePageUpChange}
        sx={{ visibility: !hasMore ? "hidden" : "visible" }}
      >
        <NavigateNextIcon />
      </IconButton>
    </Stack>
  );
};
