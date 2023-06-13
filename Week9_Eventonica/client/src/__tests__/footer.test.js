import { render, screen, cleanup} from "@testing-library/react";
import Users from "../components/users";
import Footer from "../components/footer";

afterEach(() => {
  cleanup();
});

describe("Users", () => {
  test("Footer renders in User", () => {
    render(<Footer />)
  });
});