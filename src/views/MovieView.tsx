import { useQuery } from "@tanstack/react-query";
import Search from "../components/movie/Search";
import MoviePreview from "../components/movie/Preview";
import MoviesList from "../components/movie/List";
import SearchMoviesLayout from "../layouts/SearchMovies";
import { useMovieViewContext } from "../context/MovieViewContext";
import { filterMoviesByTitle, getUpdatedMovies } from "./Services";

const MovieView = () => {
  const { isLoading, data: movies } = useQuery(["movieData"], getUpdatedMovies);
  const { movieTitle } = useMovieViewContext();

  const filteredMovies =
    movieTitle && movies ? filterMoviesByTitle(movies, movieTitle) : movies;

  return (
    <>
      <SearchMoviesLayout
        searchComponent={<Search />}
        listComponent={
          <MoviesList movies={filteredMovies || []} isLoading={isLoading} />
        }
        detailViewComponent={<MoviePreview />}
      />
    </>
  );
};

export default MovieView;
