import React from "react";
import MovieView from "./MovieView";
import { getMovies } from "./Services";
import { mockMoviesData } from "../helpers/mockData";
import { renderWithQueryClient } from "../helpers/utils";
import { screen } from "@testing-library/react";

jest.mock("./Services", () => ({
  getMovies: jest.fn(),
}));

describe("Movie View", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display movie list", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue({
      results: mockMoviesData,
    });

    renderWithQueryClient(<MovieView />);

    expect(await screen.findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading while fetching data", () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    renderWithQueryClient(<MovieView />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
