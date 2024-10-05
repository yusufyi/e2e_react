import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("should display the correct title and welcome message", () => {
    render(<App />);
    expect(screen.getByText("My First React App")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome to my first React app.")
    ).toBeInTheDocument();
  });

  test('should have a button with text "Increment"', () => {
    render(<App />);
    expect(screen.getByText("Increment")).toBeInTheDocument();
  });

  test("should not display a non-existent element", () => {
    render(<App />);
    expect(screen.queryByText("Non-existent Element")).not.toBeInTheDocument();
  });
});
