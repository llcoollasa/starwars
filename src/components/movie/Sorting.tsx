import React, { useState } from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";

export type SortOption = "EMPTY" | "EPISODE" | "YEAR";
export type SortOrder = "ASCENDING" | "DESCENDING";

const Sorting: React.FC = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { selectedOption, setSelectedOption, selectedOrder, setSelectedOrder } =
    useMovieViewContext();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const option = event.target.value as SortOption;
    setSelectedOption(option);
    setShowOptions(option !== "EMPTY");
    setSelectedOrder("ASCENDING");
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const order = event.target.value as SortOrder;
    setSelectedOrder(order);
  };

  const handleClear = () => {
    setSelectedOption("EMPTY");
    setSelectedOrder("ASCENDING");
    setShowOptions(false);
  };

  return (
    <div className="flex">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="w-40 rounded border-gray-300 border focus:outline-none text-sm"
      >
        <option value="EMPTY">Sort By</option>
        <option value="EPISODE">Episode</option>
        <option value="YEAR">Year</option>
      </select>

      {showOptions && (
        <div className="mt-2">
          <label className="mr-4">
            <input
              id="asc"
              type="radio"
              value="ASCENDING"
              checked={selectedOrder === "ASCENDING"}
              onChange={handleOrderChange}
              className="mr-1"
            />
            Ascending
          </label>
          <label>
            <input
              id="desc"
              type="radio"
              value="DESCENDING"
              checked={selectedOrder === "DESCENDING"}
              onChange={handleOrderChange}
              className="mr-1"
            />
            Descending
          </label>
        </div>
      )}

      {showOptions && (
        <button
          onClick={handleClear}
          className="mt-2 text-sm text-blue-500 hover:underline focus:outline-none"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Sorting;
