import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const usePlayTrailer = (movieid) => {
  
  const dispatch = useDispatch();
  console.log("Movie Id: ",movieid)
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos`,
        API_OPTIONS
      );
      const json = await response.json();

      let filteredRes = json.results.filter(
        (el) => el.type === "Trailer" && el.name === "Official Trailer"
      );

      const trailer = filteredRes[0] ?? json.results[0];
      // Three
      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieid]);
  // return movieTrailer;
};

export default usePlayTrailer;
