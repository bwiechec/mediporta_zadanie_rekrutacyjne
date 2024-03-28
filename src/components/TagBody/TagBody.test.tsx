import { render, screen } from "@testing-library/react";
import { TagBody } from "./TagBody";
import { TagDataContext } from "../../context/TagDataContext/TagDataContext";
import { dummyTagData } from "../../utils/helper";

describe("TagBody", () => {
  test("renders TagBody without crashing", () => {
    render(
      <TagDataContext.Provider value={dummyTagData}>
        <TagBody />
      </TagDataContext.Provider>
    );
    expect(screen.getByTestId("table-body")).toBeInTheDocument();
  });
});
