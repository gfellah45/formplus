import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
import "@testing-library/jest-dom/extend-expect";

describe("Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search Templates");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
