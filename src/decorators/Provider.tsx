import { QueryParamsProvider } from "../context/QueryParamsContext/QueryParamsContext";
import { TagDataContextProvider } from "../context/TagDataContext/TagDataContext";
import { dummyTagData, dummyTagWithoutData } from "../utils/helper";

export const ParamsProvider = (Story: any) => {
  return (
    <QueryParamsProvider>
      <Story />
    </QueryParamsProvider>
  );
};

export const TagDataProvider = (Story: any) => {
  return (
    <QueryParamsProvider>
      <TagDataContextProvider value={dummyTagData}>
        <Story />
      </TagDataContextProvider>
    </QueryParamsProvider>
  );
};

export const TagWithoutDataProvider = (Story: any) => {
  return (
    <QueryParamsProvider>
      <TagDataContextProvider value={dummyTagWithoutData}>
        <Story />
      </TagDataContextProvider>
    </QueryParamsProvider>
  );
};
