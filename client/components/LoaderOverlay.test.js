import { render, cleanup } from "@testing-library/react";
import LoaderOverlay from "./LoaderOverlay";

afterEach(cleanup);

test("loader has correct styles", () => {
  const { getByTestId } = render(<LoaderOverlay />);
  expect(getByTestId("loader-overlay")).toHaveStyle(
    `display: flex; backgroundColor: rgba(0,0,0,0.6)`
  );
});
