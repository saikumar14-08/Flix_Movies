import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCards = ({ movies }) => {
  return (
    <div className="flex overflow-x-scroll hide-scrollbar">
      {movies?.map((movie) => {
        return (
          <div key={movie.id} className="w-48 mr-4 flex-shrink-0">
            <img
              className="rounded-md"
              alt="movie-card"
              src={`${IMG_CDN}${movie?.poster_path}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieCards;
