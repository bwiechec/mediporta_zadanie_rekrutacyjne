import TableBody from "@mui/material/TableBody";
import { Tag } from "../../utils/types";
import { useTagData } from "../../context/TagDataContext/TagDataContext";
import { TagContextProvider } from "../../context/TagContext/TagContext";
import { TagRow } from "../TagRow/TagRow";

export const TagBody = () => {
  const tagData = useTagData();

  return (
    <TableBody data-testid="table-body">
      {tagData?.items.map((tag: Tag) => (
        <TagContextProvider key={tag.name} value={tag}>
          <TagRow />
        </TagContextProvider>
      ))}
    </TableBody>
  );
};
