import { render, screen, fireEvent } from "@testing-library/react";
import Sorting from "./Sorting";
import { useMovieViewContext } from "../../context/MovieViewContext";

jest.mock("../../context/MovieViewContext", () => ({
  useMovieViewContext: jest.fn(),
}));

describe("Sorting", () => {
  beforeEach(() => {
    (useMovieViewContext as jest.Mock).mockReturnValue({
      selectedOption: "EMPTY",
      setSelectedOption: jest.fn(),
      selectedOrder: "ASCENDING",
      setSelectedOrder: jest.fn(),
    });
  });

  it("should render the select with 'Sort By' option", () => {
    render(<Sorting />);

    const selectElement = screen.getByRole("combobox");

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("EMPTY");
    expect(screen.getByText("Sort By")).toBeInTheDocument();
  });

  it("should show options when a non-empty option is selected", () => {
    render(<Sorting />);
    
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "EPISODE" } });

    const ascendingRadio = screen.getByLabelText("Ascending");
    const descendingRadio = screen.getByLabelText("Descending");

    expect(ascendingRadio).toBeInTheDocument();
    expect(descendingRadio).toBeInTheDocument();
  });
 
  it("should hide options and select box should be set to Sort by when Clear button is clicked", () => {
    render(<Sorting />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "EPISODE" } });

    const ascendingRadio = screen.getByLabelText("Ascending");
    const descendingRadio = screen.getByLabelText("Descending");

    expect(ascendingRadio).toBeInTheDocument();
    expect(descendingRadio).toBeInTheDocument();

    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);

    expect(ascendingRadio).not.toBeInTheDocument();
    expect(descendingRadio).not.toBeInTheDocument();
    expect(selectElement).toHaveValue("EMPTY");
  });
});
