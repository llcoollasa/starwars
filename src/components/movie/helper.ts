import { roman } from "@ultirequiem/roman";

export const getMovieTitle = (id: number, title: string) => {
  return `Episode ${roman(id)} - ${title}`;
};
