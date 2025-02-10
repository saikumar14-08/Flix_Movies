import React, { use, useEffect, useState } from "react";
import { API_OPTIONS, YOU_TUBE_STUB } from "../utils/constants";

const VideoBackground = ({ movieid }) => {
  const [movieTrailer, setMovieTrailer] = useState('');
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    let filteredRes = json.results?.filter(
      (el) => el.type === "Trailer" && el.name === "Official Trailer"
    );
    const trailer = filteredRes.length ? filteredRes : json.results[0];
    setMovieTrailer(trailer[0].key)
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div className="flex justify-center items-center mt-6">
      <iframe
        src={YOU_TUBE_STUB + movieTrailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
