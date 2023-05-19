import React from "react";
import MovieView from "./MovieView";
import { getMovies } from "./Services";
import { mockMoviesData } from "../helpers/mockData";
import { renderWithQueryClient } from "../helpers/utils";

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

    const { findByText } = renderWithQueryClient(<MovieView />);

    expect(await findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading while fetching data", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    const { getByText } = renderWithQueryClient(<MovieView />);

    expect(await getByText("Loading...")).toBeInTheDocument();
  });
});
