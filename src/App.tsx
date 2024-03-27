import { Input, Stack, Typography } from "@mui/material";
import { useQueryParams } from "./context/QueryParamsContext/QueryParamsContext";
import { useTagList } from "./hooks/useTagList";
import { useEffect, useState } from "react";
import { ErrorSnackbar } from "./components/ErrorSnackbar/ErrorSnackbar";
import { LoadingOverlay } from "./components/LoadingOverlay/LoadingOverlay";
import { debounce } from "lodash";
import { Pagination } from "./components/Pagination/Pagination";
import "./App.css";
import { TagTable } from "./components/TagTable/TagTable";
import { TagDataContextProvider } from "./context/TagDataContext/TagDataContext";

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

  useEffect(() => {
    if (tagData?.errorId) setShouldSnackbarOpen(true);

    // setTimeout(() => {
    //   handleSnackbarClose();
    // }, 3000);
  }, [tagData?.errorId]);

  const handlePageChange = (value: number) => {
    console.log(value);
    handleSetQueryParams([{ key: "page", value: value }]);
  };

  const handlePageSizeChange = debounce((event: any) => {
    handleSetQueryParams([{ key: "pagesize", value: event.target.value }]);
  }, 250);

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
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Typography>Page size:</Typography>
        <Input
          placeholder="Page Size"
          type="number"
          sx={{ maxWidth: "5rem", textAlign: "center" }}
          onChange={handlePageSizeChange}
          defaultValue={pageSize}
        />
      </Stack>
      <ErrorSnackbar
        onClose={handleSnackbarClose}
        open={shouldSnackbarOpen}
        message={tagData?.errorMessage ?? "An error occurred"}
      />
      {!tagData?.errorId && tagData !== undefined && (
        <TagDataContextProvider value={tagData}>
          <TagTable isPreviousData={isPreviousData} />
        </TagDataContextProvider>
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
