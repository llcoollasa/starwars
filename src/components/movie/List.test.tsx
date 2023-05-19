import List from "./List";
import { renderWithQueryClient } from "../../helpers/utils";
import { mockMoviesData } from "../../helpers/mockData";

describe("List", () => {
  it("should render movie list", async () => {
    const { findByText } = renderWithQueryClient(
      <List movies={mockMoviesData} />
    );

    expect(await findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading message", async () => {
    const { getByText } = renderWithQueryClient(
      <List movies={mockMoviesData} isLoading={true} />
    );

    expect(await getByText("Loading...")).toBeInTheDocument();
  });

  it("should display no data message", async () => {
    const { getByText } = renderWithQueryClient(
      <List movies={[]} />
    );

    expect(await getByText("No Data!")).toBeInTheDocument();
  });
});
