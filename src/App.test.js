import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cart", () => {
  render(<App />);
  const linkElement = screen.getByText(/Votre panier est vide/i);
  expect(linkElement).toBeInTheDocument();
});
