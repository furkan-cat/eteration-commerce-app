import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BiSearchAlt } from "react-icons/bi";
import Input from "./Input";

describe("Input", () => {
  function InputWrapper() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <Input
        placeholder="test placeholder"
        prefix={<BiSearchAlt role="img" />}
        onChange={handleChange}
        value={value}
      />
    );
  }

  const setup = () => {
    const utils = render(<InputWrapper />);
    const input = screen.getByRole("searchbox");
    const placeholder = screen.getByPlaceholderText(/test placeholder/i);
    const prefix = screen.getByRole("img");

    return { input, placeholder, prefix, ...utils };
  };

  it("should render placeholder", () => {
    const { placeholder } = setup();

    expect(placeholder).toBeInTheDocument();
  });

  it("should onChange event work properly", async () => {
    const user = userEvent.setup();
    const { input } = setup();

    await user.type(input, "test value");

    expect(input.value).toBe("test value");
  });
});
