import React from "react";
import Header from "./Header";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useTopRatedTv,
  useTrendingTv,
  useUpComingMovies,
} from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingTv();
  useTopRatedTv();
  
  return (
    <div className="overflow-x-scroll hide-scrollbar">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
  );
};

export default Browse;
