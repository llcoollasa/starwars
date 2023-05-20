import React from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";
import { getMovieTitle } from "./helper";

const MoviePreview = () => {
  const { movie } = useMovieViewContext();

  if (!movie) {
    return (
      <div>
        <h2 data-testid="movie-default">Select an item from the movie list.</h2>
      </div>
    );
  }

  return (
    <>
      <div data-testid="movie-title" className="pb-4">
        <h2 className="text-2xl font-semibold">
          {getMovieTitle(movie.episode_id, movie.title)}
        </h2>
      </div>
      <div data-testid="movie-opening-crawl" className="pb-4 text-sm">{movie.opening_crawl}</div>
      <div data-testid="movie-director" className="text-sm">Directed by: {movie.director}</div>
    </>
  );
};

export default MoviePreview;
