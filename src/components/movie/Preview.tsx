import React from "react";
import { useMovieViewContext } from "../../context/MovieViewContext";

const MoviePreview = () => {
  const { name } = useMovieViewContext();

  return (
    <>
      <div data-testid="movie-title">Episodes III- Revenge of the Sith</div>
      <div>
        <div>
          <img src="#" alt="My Image" />
        </div>
        <div>
          War! The Republic is crumbling under attacks by the ruthless Sith
          Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.
          In a stunning move, the fiendish droid leader, General Grievous, has
          swept into the Republic capital and kidnapped Chancellor Palpatine,
          leader of the Galactic Senate. As the Separatist Droid Army attempts
          to flee the besieged capital with their valuable hostage, two Jedi
          Knights lead a desperate mission to rescue the captive Chancellor....
        </div>
      </div>
      <div>Directed by: Some Name</div>
      <div>Average Rating: ******</div>
      <div>Internet Movie DB 78%</div>
      <div>{name}</div>
    </>
  );
};

export default MoviePreview;
