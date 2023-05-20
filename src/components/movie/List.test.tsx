import List from "./List";
import { renderWithQueryClient } from "../../helpers/utils";
import { mockMoviesData } from "../../helpers/mockData";
import { screen } from "@testing-library/react";

describe("List", () => {
  it("should render movie list", async () => {
    renderWithQueryClient(<List movies={mockMoviesData} />);

    expect(await screen.findByText(/Mock Movie 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Mock Movie 2/i)).toBeInTheDocument();
  });

  it("should display loading message", async () => {
    renderWithQueryClient(<List movies={mockMoviesData} isLoading={true} />);

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("should display no data message", async () => {
    renderWithQueryClient(<List movies={[]} />);

    expect(await screen.findByText("No Data!")).toBeInTheDocument();
  });
});
