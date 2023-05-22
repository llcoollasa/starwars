import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMoviePoster } from "../../views/Services";
import Loading from "../shared/Loading";

interface PosterInput {
  title: string;
}

const Poster: React.FC<PosterInput> = ({ title }) => {
  const { isLoading, data: poster } = useQuery(["moviePoster", title], () =>
    getMoviePoster(title)
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <img
        src={poster?.Poster}
        alt={title}
        className="w-1/5"
        data-testid="movie-poster"
      />
    </>
  );
};

export default Poster;
