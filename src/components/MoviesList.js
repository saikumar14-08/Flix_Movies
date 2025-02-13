import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ title, movies }) => {
  return (
    <div>
      <h1 className=" pl-6 pt-4 text-2xl text-white"> {title} </h1>
      <div className="m-4">
        <MovieCards movies={movies} />
      </div>
    </div>
  );
};

export default MoviesList;
