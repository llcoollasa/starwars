import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface MovieViewContextData {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

interface MovieViewContextProviderProps {
  children: React.ReactNode;
}

const initialMovieContextData: MovieViewContextData = {
  name: "",
  setName: () => null,
};

const ContextForMovieView = createContext<MovieViewContextData>(
  initialMovieContextData
);

export const useMovieViewContext = () => useContext(ContextForMovieView);

const MovieViewContextProvider: React.FC<MovieViewContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");

  return (
    <ContextForMovieView.Provider value={{ name, setName }}>
      {children}
    </ContextForMovieView.Provider>
  );
};

export default MovieViewContextProvider;
