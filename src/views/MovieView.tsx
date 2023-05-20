import { useQuery } from "@tanstack/react-query";
import Search from "../components/movie/Search";
import MoviePreview from "../components/movie/Preview";
import MoviesList from "../components/movie/List";
import SearchMoviesLayout from "../layouts/SearchMovies";
import MovieViewContext from "../context/MovieViewContext";
import { getMovies } from "./Services";

const MovieView = () => {
  const { isLoading, data } = useQuery(["movieData"], getMovies);

  return (
    <MovieViewContext>
      <SearchMoviesLayout
        searchComponent={<Search />}
        listComponent={
          <MoviesList movies={data?.results || []} isLoading={isLoading} />
        }
        detailViewComponent={<MoviePreview />}
      />
    </MovieViewContext>
  );
};

export default MovieView;
