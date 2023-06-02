import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "../../mocks/handlers";

describe("ProductCard", () => {
  const length = mockData.length;
  let mockClickHandler;

  beforeEach(() => {
    mockClickHandler = jest.fn();
    const MswProductCard = () => {
      return mockData.map((products) => (
        <ProductCard
          key={products.id}
          product={{
            id: products.id,
            name: products.name,
            price: products.price,
            brand: products.brand,
            model: products.model,
            image: products.image,
          }}
          onClick={mockClickHandler}
        />
      ));
    };

    render(<MswProductCard />, { wrapper: BrowserRouter });
  });

  it("should render products", async () => {
    const imageEl = screen.getAllByRole("img");
    expect(imageEl).toHaveLength(length);
  });

  it("should clickHandler work properly, should render buttons up to the length of the mockData", async () => {
    const user = userEvent.setup();
    const btnEl = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(btnEl[0]);

    await waitFor(() => {
      expect(btnEl).toHaveLength(length);
    });

    await waitFor(() => {
      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
