import React from "react";

export interface Movie {
  episode_id: number;
  title: string;
  release_date: Date | null;
}

interface CollectionProps {
  movies: Movie[] | [];
  isLoading?: boolean;
}

const Collection: React.FC<CollectionProps> = ({
  movies,
  isLoading,
}) => {
  // const { isLoading, error, data } = useQuery(["movieData"], getMovies);

  if (isLoading) return <div>Loading...</div>;

  if (!movies.length) return <div>No Data!</div>;

  // if (error) return <div>Something went wrong!</div>;

  return (
    <>
      {movies.map((movie: Movie) => (
        <div
          key={movie.episode_id.toString()}
          id={movie.episode_id.toString()}
          className="flex"
        >
          <div>{`EPISODE ${movie.episode_id}`}</div>
          <div>{`EPISODE ${movie.episode_id} ${movie.title}`}</div>
        </div>
      ))}
    </>
  );
};

export default Collection;
