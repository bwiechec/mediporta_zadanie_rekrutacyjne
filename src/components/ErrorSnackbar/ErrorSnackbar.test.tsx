import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ErrorSnackbar } from "./ErrorSnackbar";

describe("ErrorSnackbar", () => {
  test("renders ErrorSnackbar without crashing", () => {
    render(
      <ErrorSnackbar open={false} message="Test message" onClose={() => {}} />
    );
    expect(screen.queryByText(/Test message/i)).toBeNull();
  });

  test("displays the error message when open", () => {
    render(
      <ErrorSnackbar open={true} message="Test message" onClose={() => {}} />
    );
    expect(screen.getByText(/Test message/i)).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <ErrorSnackbar open={true} message="Test message" onClose={handleClose} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
