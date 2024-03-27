import { Input, Stack, Typography } from "@mui/material";
import { useQueryParams } from "./hooks/useQueryParams";
import { useTagList } from "./hooks/useTagList";
import { useEffect, useState } from "react";
import { ErrorSnackbar } from "./components/ErrorSnackbar/ErrorSnackbar";
import { LoadingOverlay } from "./components/LoadingOverlay/LoadingOverlay";
import { debounce } from "lodash";
import { Pagination } from "./components/Pagination/Pagination";
import "./App.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const { queryParams, handleSetQueryParams } = useQueryParams();
  const { tagData, isLoading, isPreviousData, status, isError, error } =
    useTagList(queryParams);
  const [shouldSnackbarOpen, setShouldSnackbarOpen] = useState(false);

  const pageNum = parseInt(
    queryParams.find((param) => param.key === "page")?.value?.toString() ?? "1"
  );
  const pageSize =
    queryParams.find((param) => param.key === "pagesize")?.value ?? 5;

  const sortKey =
    queryParams.find((param) => param.key === "sort")?.value ?? "";
  const sortOrder =
    queryParams.find((param) => param.key === "order")?.value ?? "";

  useEffect(() => {
    if (tagData?.errorId) setShouldSnackbarOpen(true);

    setTimeout(() => {
      handleSnackbarClose();
    }, 3000);
  }, [tagData?.errorId]);

  const handlePageChange = (value: number) => {
    console.log(value);
    handleSetQueryParams([{ key: "page", value: value }]);
  };

  const handlePageSizeChange = debounce((event: any) => {
    handleSetQueryParams([{ key: "pagesize", value: event.target.value }]);
  }, 250);

  const handleSortChange = debounce((sortKey, sortOrder) => {
    handleSetQueryParams([
      { key: "sort", value: sortKey },
      { key: "order", value: sortOrder },
    ]);
  });

  const handleSnackbarClose = () => {
    setShouldSnackbarOpen(false);
  };

  console.log(status, isLoading, isPreviousData, tagData, isError, error);

  if (isLoading && !isPreviousData) {
    return <LoadingOverlay open={isLoading} withoutBackground={true} />;
  }

  if (!tagData) {
    setShouldSnackbarOpen(true);
  }

  return (
    <Stack
      spacing={4}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
      boxSizing={"border-box"}
      width={"100%"}
    >
      <Input
        placeholder="Page Size"
        type="number"
        sx={{ maxWidth: "20rem" }}
        onChange={handlePageSizeChange}
        defaultValue={pageSize}
      />
      <ErrorSnackbar
        onClose={handleSnackbarClose}
        open={shouldSnackbarOpen}
        message={tagData?.errorMessage ?? "An error occurred"}
      />
      {!tagData?.errorId && (
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "1280px", position: "relative", minWidth: "70%" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  width={"50%"}
                  onClick={() =>
                    handleSortChange(
                      "name",
                      sortOrder === "asc" && sortKey === "name" ? "desc" : "asc"
                    )
                  }
                >
                  <Typography
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    width={"100%"}
                    gap={0.5}
                  >
                    Name
                    {sortKey === "name" ? (
                      sortOrder === "asc" ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowUpIcon />
                      )
                    ) : null}
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  width={"50%"}
                  onClick={() =>
                    handleSortChange(
                      "popular",
                      sortOrder === "asc" && sortKey === "popular"
                        ? "desc"
                        : "asc"
                    )
                  }
                >
                  <Typography
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                    width={"100%"}
                    gap={0.5}
                  >
                    Count
                    {sortKey === "popular" ? (
                      sortOrder === "asc" ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowUpIcon />
                      )
                    ) : null}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tagData?.items.map((tag: any) => (
                <TableRow key={tag.name}>
                  <TableCell align="center">{tag.name}</TableCell>
                  <TableCell align="center">{tag.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <LoadingOverlay open={isPreviousData ?? false} />
        </TableContainer>
      )}
      <Pagination
        hasMore={tagData?.hasMore ?? false}
        currentPage={pageNum ?? 1}
        onPageChange={handlePageChange}
      />
    </Stack>
  );
}

export default App;
