import Collection from "../Collection";
import { getMovies } from "../Services";
import { renderWithQueryClient } from "./helpers/utils";
import { mockMoviesData } from "./helpers/mockData";
import axios from "axios";
jest.mock("axios");

jest.mock("../Services", () => ({
  getMovies: jest.fn(),
}));

describe("Collection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render movie list", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    const { findByText } = renderWithQueryClient(<Collection />);

    expect(await findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading while fetching data", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    const { getByText } = renderWithQueryClient(<Collection />);

    expect(await getByText("Loading...")).toBeInTheDocument();
  });
});
