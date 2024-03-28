import { render, screen } from "@testing-library/react";
import { TagRow } from "./TagRow";
import { TagContext } from "../../context/TagContext/TagContext";
import { dummyTagData } from "../../utils/helper";

describe("TagRow", () => {
  test("renders TagRow without crashing", () => {
    render(
      <TagContext.Provider value={dummyTagData.items[0]}>
        <TagRow />
      </TagContext.Provider>
    );
    expect(screen.getByTestId("table-row")).toBeInTheDocument();
  });

  test("correctly displays tag data", () => {
    render(
      <TagContext.Provider value={dummyTagData.items[0]}>
        <TagRow />
      </TagContext.Provider>
    );
    expect(screen.getByText(dummyTagData.items[0].name)).toBeInTheDocument();
    expect(screen.getByText(dummyTagData.items[0].count)).toBeInTheDocument();
  });
});
