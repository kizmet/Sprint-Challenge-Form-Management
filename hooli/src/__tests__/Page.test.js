import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../components/forms/Login";
import {
  render,
  fireEvent,
  renderIntoDocument,
  waitForElement,
  cleanup
} from "@testing-library/react";

test("button text okay", () => {
  const { getByRole } = render(<Login />);
  const button = getByRole("button");

  expect(button.textContent).toBe("Login");
  fireEvent.click(button);
  expect(button.textContent).toBe("Login");
});
