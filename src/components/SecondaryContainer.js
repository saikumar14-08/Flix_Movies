import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const trendingTv = useSelector((store) => store.movies?.trendingTv);
  const topRatedTv = useSelector((store) => store.movies?.topRatedTv);

  return (
    <div className="bg-black">
      <div className="-mt-24 md:-mt-40 relative z-10">
        <MoviesList title={"Now Playing"} movies={nowPlaying} />
        <MoviesList title={"Popular"} movies={popularMovies} />
        <MoviesList title={"Trending"} movies={trendingMovies} />
        <MoviesList title={"Up coming"} movies={upComingMovies} />
        <MoviesList title={"Trending TV"} movies={trendingTv} />
        <MoviesList title={"Top Rated TV"} movies={topRatedTv} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
