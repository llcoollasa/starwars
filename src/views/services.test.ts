import axios from "axios";
import {
  filterMoviesByTitle,
  getMovies,
  getUpdatedMovies,
  sortBy,
} from "./Services";
import {
  APIResponse,
  mockMoviesDataWithUpdatedTitle,
} from "../helpers/mockData";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getMovies", () => {
  it("should returns the movies response from the API", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });

    const result = await getMovies();

    expect(result).toEqual(APIResponse);
  });
});

describe("getUpdatedMovies", () => {
  it("should returns the movies response", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });

    const result = await getUpdatedMovies();

    expect(result).toEqual(mockMoviesDataWithUpdatedTitle);
  });

  it("should returns empty array", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });

    const result = await getUpdatedMovies();

    expect(result).toEqual([]);
  });
});

describe("filterMoviesByTitle", () => {
  it("should returns the movies with title and roman numbers", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });

    const result = filterMoviesByTitle(
      mockMoviesDataWithUpdatedTitle,
      "Episode II - Mock Movie 2"
    );

    expect(result).toEqual([mockMoviesDataWithUpdatedTitle[1]]);
  });
});

describe("sortBy", () => {
  it("should sort movies by episode in ascending order", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });

    const moivies = [...mockMoviesDataWithUpdatedTitle];

    const result = sortBy(moivies, "EPISODE", "ASCENDING");

    expect(result).toEqual(mockMoviesDataWithUpdatedTitle);
  });

  it("should sort movies by episode in descending order", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });
    const movies = [...mockMoviesDataWithUpdatedTitle];
    const result = sortBy(movies, "EPISODE", "DESCENDING");

    expect(result).toEqual([
      mockMoviesDataWithUpdatedTitle[1],
      mockMoviesDataWithUpdatedTitle[0],
    ]);
  });

  it("should sort movies by year in ascending order", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });

    const movies = [...mockMoviesDataWithUpdatedTitle];

    const result = sortBy(movies, "YEAR", "ASCENDING");

    expect(result).toEqual([
      mockMoviesDataWithUpdatedTitle[1],
      mockMoviesDataWithUpdatedTitle[0],
    ]);
  });

  it("should sort movies by year in descending order", async () => {
    mockedAxios.get.mockResolvedValue({
      data: APIResponse,
    });
    const movies = [...mockMoviesDataWithUpdatedTitle];
    const result = sortBy(movies, "YEAR", "DESCENDING");

    expect(result).toEqual(mockMoviesDataWithUpdatedTitle);
  });
});
