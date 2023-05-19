import React from "react";
import { render, screen } from "@testing-library/react";
import MoviePreview from "./Preview";

describe("Movie Preview", () => {
  it("renders the movie preview", () => {
    render(<MoviePreview />);
  
    const movieTitle = screen.getByTestId("movie-title");

    expect(movieTitle).toBeInTheDocument();
  });
});
