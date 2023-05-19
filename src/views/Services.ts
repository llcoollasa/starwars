import axios from "axios";
import { Movie } from "../components/movie/List";

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
