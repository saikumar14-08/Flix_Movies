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
import GPTSearch from "./GPTSearch/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptToggle = useSelector((store) => store.gpttoggle?.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingTv();
  useTopRatedTv();

  return (
    <div className="overflow-x-scroll hide-scrollbar">
      <Header />
      {gptToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />{" "}
        </>
      )}
    </div>
  );
};

export default Browse;
