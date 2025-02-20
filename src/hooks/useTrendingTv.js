import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingTV } from "../utils/moviesSlice";

export const useTrendingTv = () => {
  const dispatch = useDispatch();
  const tvTrend = useSelector((store) => store.movies.trendingTv);
  const trendTv = async () => {
    console.log("useTredingTv");
    let tvData = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    let jsonData = await tvData.json();
    dispatch(addTrendingTV(jsonData?.results));
  };

  useEffect(() => {
    !tvTrend && trendTv();
  }, [tvTrend]);
};
