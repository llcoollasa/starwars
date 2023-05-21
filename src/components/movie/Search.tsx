import React, { ChangeEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMovieViewContext } from "../../context/MovieViewContext";

const Search = () => {
  const { setMovieTitle } = useMovieViewContext();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMovieTitle(event.target.value);
  };

  return (
    <>
      <FontAwesomeIcon
        data-testid="search-icon"
        icon={faMagnifyingGlass}
        className="absolute p-2 w-4 h-4 text-slate-500"
      />
      <input
        onChange={handleChange}
        id="movie-search"
        data-testid="movie-search"
        type="text"
        placeholder="Type movie title to filter..."
        className="w-full px-8 border border-gray-300 focus:outline-none focus:border-slate-500 rounded-md leading-4 h-8	"
      />
    </>
  );
};

export default Search;
