import Poster from "./Poster";
import { render, screen } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query");
jest.mock("../../views/Services");

describe("Poster component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading spinner when loading data", () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      data: null,
    }));

    render(<Poster title="Movie Title" />);
    const loadingSpinner = screen.getByTestId("loading-screen");

    expect(loadingSpinner).toBeInTheDocument();
  });

  test("renders poster image when data is loaded", () => {
    const posterData = { Poster: "http://poster-url.com/poster.jpg" };
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: posterData,
    }));

    render(<Poster title="Movie Title" />);
    const posterImage = screen.getByAltText("Movie Title") as HTMLImageElement;;

    expect(posterImage).toBeInTheDocument();
    expect(posterImage.src).toBe(posterData.Poster);
  });
});
