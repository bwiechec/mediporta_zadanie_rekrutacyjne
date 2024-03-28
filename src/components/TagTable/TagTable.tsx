import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { TagHead } from "../TagHead/TagHead";
import { TagBody } from "../TagBody/TagBody";

interface TagTableProps {
  isPreviousData: boolean;
}

export const TagTable = ({ isPreviousData }: TagTableProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "1280px", position: "relative", minWidth: "70%" }}
    >
      <Table data-testid="tag-table">
        <TagHead />
        <TagBody />
      </Table>
      <LoadingOverlay open={isPreviousData ?? false} />
    </TableContainer>
  );
};
