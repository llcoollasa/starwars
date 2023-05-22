import React from "react";
import { render, screen } from "@testing-library/react";
import MoviePreview from "./Preview";
import { useMovieViewContext } from "../../context/MovieViewContext";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../context/MovieViewContext", () => ({
  useMovieViewContext: jest.fn(),
}));

describe("Movie Preview", () => {
  it("should display default message when no movie is selected", async () => {
    (useMovieViewContext as jest.Mock).mockReturnValue({
      movie: null,
    });

    render(<MoviePreview />);

    expect(
      await screen.findByText("Select an item from the movie list.")
    ).toBeInTheDocument();
  });

  it("should render movie details when a movie is selected", () => {
    const queryClient = new QueryClient();
    const movie = {
      title: "Movie Title",
      episode_id: 1,
      director: "Director Name",
      opening_crawl: "Opening Crawl",
    };

    (useMovieViewContext as jest.Mock).mockReturnValue({
      movie: movie,
    });

    // render(<MoviePreview />);

    render(
      <QueryClientProvider client={queryClient}>
        <MoviePreview />
      </QueryClientProvider>
    );
    const titleElement = screen.getByTestId("movie-title");
    const openingCrawlElement = screen.getByTestId("movie-opening-crawl");
    const directorElement = screen.getByTestId("movie-director");

    expect(titleElement).toHaveTextContent("Movie Title");
    expect(openingCrawlElement).toHaveTextContent("Opening Crawl");
    expect(directorElement).toHaveTextContent("Directed by: Director Name");
  });
});
