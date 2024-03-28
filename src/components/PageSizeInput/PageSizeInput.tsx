import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { debounce } from "lodash";
import { useQueryParams } from "../../context/QueryParamsContext/QueryParamsContext";

export const PageSizeInput = () => {
  const { queryParams, handleSetQueryParams } = useQueryParams();
  const pageSize =
    queryParams.find((param) => param.key === "pagesize")?.value ?? 5;

  const handlePageSizeChange = debounce((event: any) => {
    console.log(event.target.value);
    if (event.target.value === "" || event.target.value < 1) {
      handleSetQueryParams([{ key: "pagesize", value: 1 }]);
      event.target.value = 1;
    } else
      handleSetQueryParams([{ key: "pagesize", value: event.target.value }]);
  }, 250);

  return (
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
  );
};
