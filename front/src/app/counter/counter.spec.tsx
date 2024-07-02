import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./page";

describe("Counter", () => {
  test("Renders the initial count on zero", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const countElement = screen.getByText("1");
    expect(countElement).toBeInTheDocument();
  });
});
