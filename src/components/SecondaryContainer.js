import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-10">
        <MoviesList title={"Now Playing"} movies={nowPlaying} />
        <MoviesList title={"Popular"} movies={popularMovies} />
        <MoviesList title={"Trending"} movies={trendingMovies} />
        <MoviesList title={"Up coming"} movies={upComingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
