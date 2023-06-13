import { render, screen, cleanup} from "@testing-library/react";
import Users from "../components/users";

afterEach(() => {
  cleanup();
});

describe("Users", () => {
  test("users renders", () => {
    render(<Users />)
  });
});