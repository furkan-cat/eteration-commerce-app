import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  let mockHandleClick;

  beforeEach(() => {
    mockHandleClick = jest.fn();
    render(<Button title="Add to Cart" isLoading onClick={mockHandleClick} />);
  });

  it("should render title prop", () => {
    const textButton = screen.getByText(/Add to Cart/i);
    expect(textButton).toBeInTheDocument();
  });

  it("should render Spinner, if isLoading prop exists", () => {
    const spinner = screen.getByRole("img");
    expect(spinner).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <Button isLoading onClick={mockHandleClick}>
        <p>I'm your children</p>
      </Button>
    );
    
    const children = screen.getByText(/i'm your children/i);
    expect(children).toBeInTheDocument();
  });

  it("should onClick event work properly", async () => {
    const btn = screen.getByRole("button");
    await userEvent.click(btn);

    expect(mockHandleClick).toHaveBeenCalled();
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
