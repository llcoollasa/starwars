import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Movie = {
  title: string;
  episode_id: number;
  director: string;
  opening_crawl: string;
};

export interface MovieViewContextData {
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
  movieTitle: string | null;
  setMovieTitle: Dispatch<SetStateAction<string | null>>;
}

interface MovieViewContextProviderProps {
  children: React.ReactNode;
}

const initialMovieContextData: MovieViewContextData = {
  movie: null,
  setMovie: () => null,
  movieTitle: null,
  setMovieTitle: () => null,
};

export const ContextForMovieView = createContext<MovieViewContextData>(
  initialMovieContextData
);

export const useMovieViewContext = () => useContext(ContextForMovieView);

const MovieViewContextProvider: React.FC<MovieViewContextProviderProps> = ({
  children,
}) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieTitle, setMovieTitle] = useState<string | null>(null);

  return (
    <ContextForMovieView.Provider
      value={{ movie, setMovie, movieTitle, setMovieTitle }}
    >
      {children}
    </ContextForMovieView.Provider>
  );
};

export default MovieViewContextProvider;
