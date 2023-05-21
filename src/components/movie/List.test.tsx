import List from "./List";
import { renderWithQueryClient } from "../../helpers/utils";
import { mockMoviesDataWithUpdatedTitle } from "../../helpers/mockData";
import { screen } from "@testing-library/react";

describe("List", () => {
  it("should render movie list", async () => {
    renderWithQueryClient(<List movies={mockMoviesDataWithUpdatedTitle} />);

    expect(await screen.findByText(/EPISODE 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Episode II - Mock Movie 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/1977-05-25/i)).toBeInTheDocument();
  });

  it("should display loading screen", () => {
    renderWithQueryClient(<List movies={mockMoviesDataWithUpdatedTitle} isLoading={true} />);

    expect(screen.getByTestId("loading-screen")).toBeInTheDocument();
  });

  it("should display no data message", async () => {
    renderWithQueryClient(<List movies={[]} />);

    expect(await screen.findByText("No Data!")).toBeInTheDocument();
  });
});
