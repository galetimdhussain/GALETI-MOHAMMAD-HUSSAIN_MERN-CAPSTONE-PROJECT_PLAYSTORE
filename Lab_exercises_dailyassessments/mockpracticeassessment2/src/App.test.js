import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { BookingProvider } from "./context/BookingContext";

test("renders app title", () => {
  render(
    <BookingProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </BookingProvider>
  );
  const titleElement = screen.getByRole("link", {
    name: /travel booking platform/i,
  });
  expect(titleElement).toBeInTheDocument();
});
