import axios from "axios";
import { Movie } from "./Collection";

interface Result {
  count: number;
  next: null;
  previous: null;
  results: Movie[];
}
 
export const getMovies = async () : Promise<Result> => {
  const response = await axios.get("https://swapi.dev/api/films/?format=json");
console.log(response.data)
  return response.data;
};
