import { Stack } from "@mui/material";
import { useQueryParams } from "./context/QueryParamsContext/QueryParamsContext";
import { useTagList } from "./hooks/useTagList";
import { useEffect, useState } from "react";
import { ErrorSnackbar } from "./components/ErrorSnackbar/ErrorSnackbar";
import { LoadingOverlay } from "./components/LoadingOverlay/LoadingOverlay";
import { Pagination } from "./components/Pagination/Pagination";
import "./App.css";
import { TagTable } from "./components/TagTable/TagTable";
import { TagDataContextProvider } from "./context/TagDataContext/TagDataContext";
import { PageSizeInput } from "./components/PageSizeInput/PageSizeInput";
import NoTagsFound from "./components/NoTagsFound/NoTagsFound";

function App() {
  const { queryParams, handleSetQueryParams } = useQueryParams();
  const { tagData, isLoading, isPreviousData } = useTagList(queryParams);
  const [shouldSnackbarOpen, setShouldSnackbarOpen] = useState(false);

  const pageNum = parseInt(
    queryParams.find((param) => param.key === "page")?.value?.toString() ?? "1"
  );

  useEffect(() => {
    if (tagData?.errorId) setShouldSnackbarOpen(true);
  }, [tagData?.errorId, tagData?.errorMessage]);

  useEffect(() => {
    if (isLoading) setShouldSnackbarOpen(false);
  }, [isLoading]);

  const handlePageChange = (value: number) => {
    handleSetQueryParams([{ key: "page", value: value }]);
  };

  const handleSnackbarClose = () => {
    setShouldSnackbarOpen(false);
  };

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
      <PageSizeInput />
      {tagData?.errorMessage && (
        <ErrorSnackbar
          onClose={handleSnackbarClose}
          open={shouldSnackbarOpen}
          message={tagData?.errorMessage}
        />
      )}
      {!tagData?.errorId && tagData !== undefined && tagData.items.length ? (
        <TagDataContextProvider value={tagData}>
          <TagTable isPreviousData={isPreviousData} />
        </TagDataContextProvider>
      ) : (
        <NoTagsFound isPreviousData={isPreviousData} />
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
