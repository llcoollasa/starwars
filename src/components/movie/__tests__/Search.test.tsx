import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../Search";

describe("Search", () => {
  it("renders the search input and icon", () => {
    render(<Search />);
    const searchIcon = screen.getByTestId("search-icon");
    const searchInput = screen.getByPlaceholderText(
      "Type movie title to filter..."
    );

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
