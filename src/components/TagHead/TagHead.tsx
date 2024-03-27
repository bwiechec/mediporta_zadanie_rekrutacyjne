import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useQueryParams } from "../../context/QueryParamsContext/QueryParamsContext";
import { debounce } from "lodash";

export const TagHead = () => {
  const { queryParams, handleSetQueryParams } = useQueryParams();

  const sortKey =
    queryParams.find((param) => param.key === "sort")?.value ?? "";
  const sortOrder =
    queryParams.find((param) => param.key === "order")?.value ?? "";

  const handleSortChange = debounce((sortKey, sortOrder) => {
    handleSetQueryParams([
      { key: "sort", value: sortKey },
      { key: "order", value: sortOrder },
    ]);
  });

  return (
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
              sortOrder === "asc" && sortKey === "popular" ? "desc" : "asc"
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
  );
};
