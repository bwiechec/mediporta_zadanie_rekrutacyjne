import { createContext, useContext } from "react";
import { TagResponse } from "../../utils/types";

export const TagDataContext = createContext<TagResponse | undefined>(undefined);

export const useTagData = () => {
  const context = useContext(TagDataContext);
  if (!context) {
    throw new Error("useTagData must be used within a TagDataContextProvider");
  }
  return context;
};

export const TagDataContextProvider = ({
  value,
  children,
}: {
  value: TagResponse;
  children: React.ReactNode;
}) => {
  return (
    <TagDataContext.Provider value={value}>{children}</TagDataContext.Provider>
  );
};
