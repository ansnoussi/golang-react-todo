import { render, screen, act } from "@testing-library/react";
import App from "./App";

test("App starts without crashing", async () => {
  await act(async () => render(<App />));
  const linkElement = screen.getByText(/To-Do List/i);
  expect(linkElement).toBeInTheDocument();
});
