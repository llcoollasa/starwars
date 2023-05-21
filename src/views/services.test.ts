import axios from "axios";
import {
  filterMoviesByTitle,
  getMovies,
  getUpdatedMovies,
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
