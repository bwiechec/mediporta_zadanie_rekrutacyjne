import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useTag } from "../../context/TagContext/TagContext";

export const TagRow = () => {
  const tag = useTag();
  return (
    <TableRow key={tag.name}>
      <TableCell align="center">{tag.name}</TableCell>
      <TableCell align="center">{tag.count}</TableCell>
    </TableRow>
  );
};
