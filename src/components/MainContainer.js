import React from "react";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;

  console.log("ID: ",id);
  return (
    <div>
      <VideoBackground movieid={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
