import List from "./List";
import { getMovies } from "../../views/Services";
import { renderWithQueryClient } from "../../helpers/utils";
import { mockMoviesData } from "../../helpers/mockData";

jest.mock("./Services", () => ({
  getMovies: jest.fn(),
}));

describe("List", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render movie list", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    const { findByText } = renderWithQueryClient(<List movies={[]} />);

    expect(await findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading while fetching data", async () => {
    const mockedGetMovies = getMovies as jest.Mock;
    mockedGetMovies.mockResolvedValue(mockMoviesData);

    const { getByText } = renderWithQueryClient(<List  movies={[]}/>);

    expect(await getByText("Loading...")).toBeInTheDocument();
  });
});
