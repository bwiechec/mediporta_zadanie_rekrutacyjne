import { render, screen } from "@testing-library/react";
import { TagTable } from "./TagTable";
import { TagDataContext } from "../../context/TagDataContext/TagDataContext";
import { QueryParamsProvider } from "../../context/QueryParamsContext/QueryParamsContext";
import { dummyTagData } from "../../utils/helper";

describe("TagTable", () => {
  test("renders TagBody without crashing", () => {
    render(
      <QueryParamsProvider>
        <TagDataContext.Provider value={dummyTagData}>
          <TagTable isPreviousData={false} />
        </TagDataContext.Provider>
      </QueryParamsProvider>
    );
    expect(screen.getByTestId("tag-table")).toBeInTheDocument();
  });
});
