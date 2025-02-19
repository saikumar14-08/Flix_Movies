import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedTV,
  addTrendingMovies,
  addTrendingTV,
  addUpComingMovies,
} from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  // Fetch Data from TMDB API and update store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesData = useSelector((store) => store.movies.popularMovies);
  const popularMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMoviesData && popularMovies();
  }, []);
};

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector((store) => store.movies.topRatedTv);

  const toprated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !topMovies && toprated();
  }, []);
};

export const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const upcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && upcoming();
  }, []);
};

export const useTrendingTv = () => {
  const dispatch = useDispatch();
  const tvTrend = useSelector((store) => store.movies.trendingTv);
  const trendTv = async () => {
    let tvData = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    let jsonData = await tvData.json();
    dispatch(addTrendingTV(jsonData?.results));
  };

  useEffect(() => {
    !tvTrend && trendTv();
  }, []);
};

export const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topData = useSelector((store) => store.movies.topRatedTv);
  const topRatedData = async () => {
    const fetchtopratedtv = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await fetchtopratedtv.json();
    dispatch(addTopRatedTV(jsonData?.results));
  };

  useEffect(() => {
    !topData && topRatedData();
  }, []);
};
