import React from "react";
import MovieView from "./MovieView";
import {
  APIPosterResponse,
  APIResponse,
  mockMoviesDataWithUpdatedTitle,
} from "../helpers/mockData";
import { renderWithQueryClient } from "../helpers/utils";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MovieViewContextProvider from "../context/MovieViewContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const queryClient = new QueryClient();

describe("Movie View", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({ data: APIResponse });
    mockedAxios.get.mockResolvedValueOnce({ data: APIPosterResponse });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display movie list", async () => {
    renderWithQueryClient(<MovieView />);

    expect(
      await screen.findByText(/EPISODE I - Mock Movie 1/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/EPISODE II - Mock Movie 2/i)
    ).toBeInTheDocument();
  });

  it("should display loading while fetching data", () => {
    renderWithQueryClient(<MovieView />);

    expect(screen.getByTestId("loading-screen")).toBeInTheDocument();
  });

  it("should display Default message in preview panel", () => {
    renderWithQueryClient(<MovieView />);

    expect(screen.getByTestId("movie-default")).toBeInTheDocument();
  });

  it("should display movie details when selecting a movie from the list", async () => {
    renderWithQueryClient(
      <MovieViewContextProvider>
        <MovieView />
      </MovieViewContextProvider>
    );

    let selectedItem: HTMLElement[] = [];
    await waitFor(() => {
      selectedItem = screen.getAllByTestId("list-item-2");
      expect(selectedItem.length).toBe(1);
    });

    fireEvent.click(selectedItem[0]);

    expect((await screen.findByTestId("movie-title")).textContent).toBe(
      mockMoviesDataWithUpdatedTitle[1].title
    );
    expect((await screen.findByTestId("movie-opening-crawl")).textContent).toBe(
      mockMoviesDataWithUpdatedTitle[1].opening_crawl
    );
    expect((await screen.findByTestId("movie-director")).textContent).toBe(
      `Directed by: ${mockMoviesDataWithUpdatedTitle[1].director}`
    );

    await waitFor(() => {
      selectedItem = screen.getAllByTestId("movie-poster");
      expect(selectedItem.length).toBe(1);
    });

    const imgElement = screen.getByAltText(
      mockMoviesDataWithUpdatedTitle[1].title
    );
    const srcAttribute = imgElement.getAttribute("src");
    expect(srcAttribute).toBe(APIPosterResponse.Poster);

  });

  it("should filter movies when user changes the search input", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieViewContextProvider>
          <MovieView />
        </MovieViewContextProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText(/Episode II - Mock Movie 2/i)
    ).toBeInTheDocument();

    const searchInput = screen.getByTestId("movie-search");

    fireEvent.change(searchInput, { target: { value: "Episode II" } });

    expect(
      screen.queryByText(/Episode I - Mock Movie 1/i)
    ).not.toBeInTheDocument();
    expect(
      await screen.findByText(/Episode II - Mock Movie 2/i)
    ).toBeInTheDocument();
  });

  it("should sort movies by episode descending order", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieViewContextProvider>
          <MovieView />
        </MovieViewContextProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText(/Episode II - Mock Movie 2/i)
    ).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "EPISODE" } });

    const descendingRadio = screen.getByLabelText("Descending");
    fireEvent.click(descendingRadio);

    const listItems = screen.getAllByTestId(/list-item-episode-/i);
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe("EPISODE 2");
    expect(listItems[1].textContent).toBe("EPISODE 1");
  });

  it("should sort movies by year descending order", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieViewContextProvider>
          <MovieView />
        </MovieViewContextProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText(/Episode II - Mock Movie 2/i)
    ).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "YEAR" } });

    const descendingRadio = screen.getByLabelText("Descending");
    fireEvent.click(descendingRadio);

    expect(
      await screen.findByText(/Episode II - Mock Movie 2/i)
    ).toBeInTheDocument();

    const listItems = screen.getAllByTestId(/list-item-release-date/i);
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe("1977-05-25");
    expect(listItems[1].textContent).toBe("1967-05-25");
  });
});
