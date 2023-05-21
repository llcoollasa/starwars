import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type SortOption = "EMPTY" | "EPISODE" | "YEAR";

type SortOrder = "ASCENDING" | "DESCENDING";

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
  selectedOption: SortOption;
  setSelectedOption: Dispatch<SetStateAction<SortOption>>;
  selectedOrder: SortOrder;
  setSelectedOrder: Dispatch<SetStateAction<SortOrder>>;
}

interface MovieViewContextProviderProps {
  children: React.ReactNode;
}

const initialMovieContextData: MovieViewContextData = {
  movie: null,
  setMovie: () => null,
  movieTitle: null,
  setMovieTitle: () => null,
  selectedOption: "EMPTY",
  setSelectedOption: () => null,
  selectedOrder: "ASCENDING",
  setSelectedOrder: () => null,
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
  const [selectedOption, setSelectedOption] = useState<SortOption>("EMPTY");
  const [selectedOrder, setSelectedOrder] = useState<SortOrder>("ASCENDING");

  return (
    <ContextForMovieView.Provider
      value={{
        movie,
        setMovie,
        movieTitle,
        setMovieTitle,
        selectedOption,
        setSelectedOption,
        selectedOrder,
        setSelectedOrder,
      }}
    >
      {children}
    </ContextForMovieView.Provider>
  );
};

export default MovieViewContextProvider;
