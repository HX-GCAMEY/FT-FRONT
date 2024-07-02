import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import SiginForm from "./page";

describe("Signin form test", () => {
  beforeEach(() => {
    render(<SiginForm />);
  });

  test("renders email input field", () => {
    const emailInput = screen.getByLabelText(
      "Email address"
    ) as HTMLInputElement;
    expect(emailInput).toBeInTheDocument();
  });

  test("renders password input field", () => {
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    expect(passwordInput).toBeInTheDocument();
  });

  test("updates the state when email input value changes", () => {
    const emailInput = screen.getByLabelText(
      "Email address"
    ) as HTMLInputElement;
    fireEvent.change(emailInput, {target: {value: "bartolomiau@gmail.com"}});
    expect(emailInput.value).toBe("bartolomiau@gmail.com");
  });

  test("submits the form when submit button is clicked", () => {
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
