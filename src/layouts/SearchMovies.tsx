import React from "react";

import Search from "../components/movie/Search";
import MoviePreview from "../components/movie/Details";

const SearchMovies = () => {
  return (
    <>
    
      <Search />

      <div className="grid grid-cols-2">
        <div className="bg-gray-300 col-span-2 xs:col-span-1 p-2">A</div>
        <div className="bg-red-500 col-span-2 xs:col-span-1 p-2 border-l border-slate-600">
          <MoviePreview />
        </div>
      </div>
    </>
  );
};

export default SearchMovies;
