import { createContext, useContext } from "react";
import { Tag } from "../../utils/types";

export const TagContext = createContext<Tag | undefined>(undefined);

export const useTag = () => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTag must be used within a TagContextProvider");
  }
  return context;
};

export const TagContextProvider = ({
  value,
  children,
}: {
  value: Tag;
  children: React.ReactNode;
}) => {
  return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
};
