import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";
import { useState } from "react";

describe("Checkbox", () => {
  const mockOnChangeHandler = jest.fn();

  it("should checked prop change, when the onChange event triggered", async () => {
    const Wrapper = () => {
      const [state, setState] = useState(false);
      return (
        <CheckBox onChange={() => setState((prev) => !prev)} checked={state} />
      );
    };

    render(<Wrapper />);
    const input = screen.getByRole("checkbox");

    expect(input).not.toBeChecked();

    await userEvent.click(input);

    expect(input).toBeChecked();
  });

  it("should onChange event have been called once", async () => {
    render(<CheckBox onChange={mockOnChangeHandler} />);

    const input = screen.getByRole("checkbox");
    await userEvent.click(input);

    expect(mockOnChangeHandler).toHaveBeenCalled();
    expect(mockOnChangeHandler).toHaveBeenCalledTimes(1);
  });
  //   it("", () => {});
});

// it("", () => {});
// it("", () => {});
