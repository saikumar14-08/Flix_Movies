import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTV } from "../utils/moviesSlice";

export const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topData = useSelector((store) => store.movies.topRatedTv);

  useEffect(() => {
    const topRatedData = async () => {
      const fetchtopratedtv = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const jsonData = await fetchtopratedtv.json();
      dispatch(addTopRatedTV(jsonData?.results));
    };

    !topData && topRatedData();
  }, [topData, dispatch]);
};
