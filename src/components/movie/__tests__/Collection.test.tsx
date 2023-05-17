import React from "react";
import { render } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import Collection, { Movie } from "../Collection";
import { getMovies } from "../Services";

jest.mock("@tanstack/react-query");
jest.mock("../Services");

describe("Collection", () => {
  const mockMovies: Movie[] = [
    {
      episode_id: 1,
      title: "A New Hope",
      release_date: new Date("1977-05-25"),
    },
    {
      episode_id: 2,
      title: "The Empire Strikes Back",
      release_date: new Date("1980-05-21"),
    },
    {
      episode_id: 3,
      title: "Return of the Jedi",
      release_date: new Date("1983-05-25"),
    },
  ];

  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: undefined,
      data: mockMovies,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the movies correctly", () => {
    const { getByText } = render(<Collection />);
    mockMovies.forEach((movie) => {
      expect(getByText(`EPISODE ${movie.episode_id}`)).toBeInTheDocument();
      expect(
        getByText(`EPISODE ${movie.episode_id} ${movie.title}`)
      ).toBeInTheDocument();
    });
  });

  it("displays a loading message while data is being fetched", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      error: undefined,
      data: [],
    });
    const { getByText } = render(<Collection />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("displays an error message when there is an error fetching the data", () => {
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: new Error("Something went wrong!"),
      data: [],
    });
    const { getByText } = render(<Collection />);
    expect(getByText("Something went wrong!")).toBeInTheDocument();
  });
});
 