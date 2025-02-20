import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import React from "react";

const VideoBackground = React.memo(({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-[100%]">
      {trailerVideo ? (
        <iframe
          className="w-[100%] aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0&loop=1&playsinline=1&modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p>Loading trailer...</p> // Optional loading message
      )}
    </div>
  );
});

export default VideoBackground;
