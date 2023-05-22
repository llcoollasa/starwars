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
    <div className="flex bg-gray-200 pt-1 pb-3 pl-2 shadow-sm">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="py-1 w-40 rounded border-gray-300 border focus:outline-none text-sm"
      >
        <option value="EMPTY" className="p-3">Sort By</option>
        <option value="EPISODE">Episode</option>
        <option value="YEAR">Year</option>
      </select>

      {showOptions && (
        <div className="flex items-center">
          <label className="mx-2">
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
          className="pl-3 text-sm text-blue-500 hover:underline"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Sorting;
