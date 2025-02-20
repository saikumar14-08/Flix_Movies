import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesData = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    const popularMovies = async () => {
      let data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    !popularMoviesData && popularMovies();
  }, [popularMoviesData, dispatch]);
};
