import React, { useState } from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";
import { getMovieTitle } from "./helper";

export interface Movie {
  episode_id: number;
  title: string;
  director: string;
  opening_crawl: string;
  release_date: string;
}

interface CollectionProps {
  movies: Movie[] | [];
  isLoading?: boolean;
}

const Collection: React.FC<CollectionProps> = ({ movies, isLoading }) => {
  const { setMovie } = useMovieViewContext();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    const selectedMovie = movies.find((item) => item.episode_id === id);

    if (selectedMovie) {
      setSelectedMovieId(id);

      return setMovie({
        episode_id: selectedMovie.episode_id,
        title: selectedMovie.title,
        director: selectedMovie.director,
        opening_crawl: selectedMovie.opening_crawl,
      });
    }

    setMovie(null);
    setSelectedMovieId(null);
  };

  if (isLoading) return <div>Loading...</div>;

  if (!movies.length) return <div>No Data!</div>;

  return (
    <div>
      <table className="table-auto w-full text-gray-600">
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.episode_id.toString()}
              className={`border-b cursor-pointer ${
                selectedMovieId === movie.episode_id
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                handleItemClick(movie.episode_id);
              }}
            >
              <td className="py-2 text-sm">{`EPISODE ${movie.episode_id}`}</td>
              <td className="py-2 font-semibold">
                {getMovieTitle(movie.episode_id, movie.title)}
              </td>
              <td className="py-2 text-right pr-2">{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collection;
