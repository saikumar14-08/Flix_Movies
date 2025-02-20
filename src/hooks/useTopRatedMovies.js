import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector((store) => store.movies.topRatedTv);

  useEffect(() => {
    const toprated = async () => {
      console.log("useTopRatedMovies");
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };

    !topMovies && toprated();
  }, [topMovies, dispatch]);
};
