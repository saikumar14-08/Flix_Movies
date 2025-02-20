import React, { useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";

const MovieCards = ({ movies }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [trailers, setTrailers] = useState({});
  // Fetch trailer for each movie on hover
  const fetchTrailer = async (movieId) => {
    if (trailers[movieId]) return; // Avoid redundant API calls
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const data = await res.json();
      const trailer = data.results.find((vid) => vid.type === "Trailer");
      if (trailer) {
        setTrailers((prev) => ({ ...prev, [movieId]: trailer.key }));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <div className="flex overflow-x-scroll hide-scrollbar">
      {movies?.map((movie) => {
        return (
          movie?.poster_path && (
            <div
              key={movie.id}
              className="w-24 mr-4 flex-shrink-0 relative group sm:w-32 md:32"
              onMouseEnter={() => {
                setHoveredMovie(movie.id);
                fetchTrailer(movie.id);
              }}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              {/* Display Trailer if Available */}
              {hoveredMovie === movie.id && trailers[movie.id] ? (
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <iframe
                    title={movie.id}
                    className="absolute top-1/2 left-1/2 w-[250%] h-[250%] transform -translate-x-1/2 -translate-y-1/2"
                    src={`https://www.youtube.com/embed/${
                      trailers[movie.id]
                    }?autoplay=1&mute=1&controls=0&loop=1&playlist=${
                      trailers[movie.id]
                    }`}
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                  />
                </div>
              ) : (
                // Show Poster or Backdrop on Hover
                <img
                  className="rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  alt="movie-card"
                  src={`${IMG_CDN}${
                    hoveredMovie === movie.id
                      ? movie?.backdrop_path
                      : movie?.poster_path
                  }`}
                />
              )}

              {/* Movie Title Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg m-4 font-bold">
                  {movie?.title || "Movie Title"}
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default MovieCards;
