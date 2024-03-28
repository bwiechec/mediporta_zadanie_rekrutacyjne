import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useTag } from "../../context/TagContext/TagContext";

export const TagRow = () => {
  const tag = useTag();
  return (
    <TableRow key={tag.name} data-testid="table-row">
      <TableCell align="center" data-testid="table-row-name">
        {tag.name}
      </TableCell>
      <TableCell align="center" data-testid="table-row-count">
        {tag.count}
      </TableCell>
    </TableRow>
  );
};
