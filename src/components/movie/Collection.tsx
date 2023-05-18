import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./Services";

export interface Movie {
  episode_id: number;
  title: string;
  release_date: Date | null;
}

const Collection = () => {
  const { isLoading, error, data } = useQuery(["movieData"], getMovies);
  
  if (isLoading) return <div>Loading...</div>;
  
  if (error) return <div>Something went wrong!</div>;
  
  return (
    <>
      {data?.results?.map((movie: Movie) => (
        <div key={movie.episode_id.toString()} id={movie.episode_id.toString()} className="flex">
          <div>{`EPISODE ${movie.episode_id}`}</div>
          <div>{`EPISODE ${movie.episode_id} ${movie.title}`}</div>
        </div>
      ))}
    </>
  );
};

export default Collection;
