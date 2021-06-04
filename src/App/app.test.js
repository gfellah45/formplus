4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
/**
 * Test What user would see
 */
test("renders the form correctly", () => {
  const { getByText, getByLabelText } = render(<App />);
  const input = getByLabelText(/search:/i);
  expect(input).toHaveAttribute("type", "text");
});
