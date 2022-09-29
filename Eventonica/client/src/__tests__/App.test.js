import { render, screen } from "@testing-library/react";
import App from "../App";
import Events from "../components/events"

// First Test - Pass
describe("Events", () => {
  test("render the Events component", () => {
    render(<Events />);
  });
});

// Second Test- Pass
describe("App", () => {
  test("render the App component", () => {
    render(<App />);
  });
});

