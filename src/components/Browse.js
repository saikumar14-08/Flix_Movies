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
  const gptToggle = useSelector((store) => store.gpt?.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingTv();
  useTopRatedTv();

  return (
    <div className="m-0 p-0 overflow-x-hidden w-[100%]">
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
