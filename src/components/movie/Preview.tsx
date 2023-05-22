import React from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";
import Poster from "./Poster";

const MoviePreview = () => {
  const { movie } = useMovieViewContext();

  if (!movie) {
    return (
      <div className="text-center">
        <h2 data-testid="movie-default">Select an item from the movie list.</h2>
      </div>
    );
  }

  return (
    <>
      <div data-testid="movie-title" className="pb-4">
        <h2 className="text-2xl font-semibold">{movie.title}</h2>
      </div>
      <div className="flex">
        <Poster title={movie.title} />
        <div data-testid="movie-opening-crawl" className="pl-3 pb-4 text-sm">
          {movie.opening_crawl}
        </div>
      </div>
      <div data-testid="movie-director" className="text-sm pt-4">
        Directed by: {movie.director}
      </div>
    </>
  );
};

export default MoviePreview;
