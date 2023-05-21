import axios from "axios";
import { Movie } from "../components/movie/List";
import { getMovieTitle } from "../components/movie/helper";

const API_URL = process.env.REACT_APP_STAR_WARS_API as string;

export interface MoviesResult {
  count: number;
  next: null;
  previous: null;
  results: Movie[];
}

export const getMovies = async (): Promise<MoviesResult> => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getUpdatedMovies = async (): Promise<Movie[] | []> => {
  const response = await getMovies();
  if (response.results) {
    return response.results.map((item) => ({
      ...item,
      title: getMovieTitle(item.episode_id, item.title),
    }));
  }

  return [];
};

export const filterMoviesByTitle = (
  moviesCollection: Movie[],
  title: string
): Movie[] => {
  const lowercasedTitle = title.toLowerCase();
  const filteredCollection = moviesCollection.filter((movie) => {
    const { title } = movie;
    return title.toLowerCase().includes(lowercasedTitle);
  });

  return filteredCollection;
};
