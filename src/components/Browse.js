import React, { lazy, Suspense } from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useTopRatedTv } from "../hooks/useTopRatedTv";
import { useTrendingTv } from "../hooks/useTrendingTv";
import { useUpComingMovies } from "../hooks/useUpComingMovies";

import { GPTSearch } from "./GPTSearch/GPTSearch";
import { useSelector } from "react-redux";

const SecondaryContainer = lazy(() => import("./SecondaryContainer"));
const MainContainer = lazy(() => import("./MainContainer"));

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
      {gptToggle ? (
        <GPTSearch />
      ) : (
        <>
          <Suspense fallback={"Loading Main Contianer and Secondary Container"}>
            <MainContainer />
            <SecondaryContainer />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Browse;
