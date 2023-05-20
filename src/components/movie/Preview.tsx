import React from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";

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
      <div data-testid="movie-title"><h2>{movie.title}</h2></div>
      <div data-testid="movie-opening-crawl">{movie.opening_crawl}</div>
      <div data-testid="movie-director">Directed by: {movie.director}</div>
    </>
  );
};

export default MoviePreview;