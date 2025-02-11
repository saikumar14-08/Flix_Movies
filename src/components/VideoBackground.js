import React from "react";
import { YOU_TUBE_STUB } from "../utils/constants";
import usePlayTrailer from "../hooks/usePlayTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieid }) => {
  usePlayTrailer(movieid);
  const movieTrailer = useSelector((store) => store.movie?.movieTrailer);
  console.log(movieTrailer);
  return (
    <div className="flex justify-center items-center mt-6">
      {movieTrailer && (
        <iframe
          src={`${YOU_TUBE_STUB}${movieTrailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full max-w-4xl h-64 sm:h-96"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
