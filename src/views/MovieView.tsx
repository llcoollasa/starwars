import { useQuery } from "@tanstack/react-query";
import Search from "../components/movie/Search";
import MoviePreview from "../components/movie/Preview";
import MoviesList, { Movie } from "../components/movie/List";
import SearchMoviesLayout from "../layouts/SearchMovies";
import { useMovieViewContext } from "../context/MovieViewContext";
import { filterMoviesByTitle, getUpdatedMovies, sortBy } from "./Services";
import { useMemo } from "react";

const MovieView = () => {
  const { isLoading, data: movies } = useQuery(["movieData"], getUpdatedMovies);
  const { movieTitle, selectedOrder, selectedOption } = useMovieViewContext();

  const filteredAndSortedMovies: Movie[] | [] = useMemo(() => {
    let moviesCollection: Movie[] | [] = [];

    if (movies) {
      moviesCollection = movies;
    }

    if (moviesCollection && movieTitle) {
      moviesCollection = filterMoviesByTitle(moviesCollection, movieTitle);
    }

    if (moviesCollection && selectedOption !== "EMPTY") {
      moviesCollection = sortBy(moviesCollection, selectedOption, selectedOrder);
    }

    return moviesCollection;
  }, [movies, movieTitle, selectedOrder, selectedOption]);

  return (
    <>
      <SearchMoviesLayout
        searchComponent={<Search />}
        listComponent={
          <MoviesList
            movies={filteredAndSortedMovies || []}
            isLoading={isLoading}
          />
        }
        detailViewComponent={<MoviePreview />}
      />
    </>
  );
};

export default MovieView;
