import React from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";

export interface Movie {
  episode_id: number;
  title: string;
  director: string;
  opening_crawl: string;
}

interface CollectionProps {
  movies: Movie[] | [];
  isLoading?: boolean;
}

const Collection: React.FC<CollectionProps> = ({ movies, isLoading }) => {
  const { setMovie } = useMovieViewContext();

  const handleItemClick = (id: number) => {
    const selectedMovie = movies.find((item) => item.episode_id === id);

    if (selectedMovie) {
      return setMovie({
        episode_id: selectedMovie.episode_id,
        title: selectedMovie.title,
        director: selectedMovie.director,
        opening_crawl: selectedMovie.opening_crawl,
      });
    }

    setMovie(null);
  };

  if (isLoading) return <div>Loading...</div>;

  if (!movies.length) return <div>No Data!</div>;

  return (
    <>
      {movies.map((movie: Movie) => (
        <div
          key={movie.episode_id.toString()}
          id={movie.episode_id.toString()}
          className="flex"
        >
          <div
            onClick={() => handleItemClick(movie.episode_id)}
          >{`EPISODE ${movie.episode_id} ${movie.title}`}</div>
        </div>
      ))}
    </>
  );
};

export default Collection;