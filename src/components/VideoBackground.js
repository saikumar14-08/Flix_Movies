import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "hXzcyx9V0xw"+
          "?&autoplay=1&mute=1&controls=0&loop=1&playsinline=1&modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3"+
          `&playlist=${trailerVideo?.key}`
          // "&playlist=hXzcyx9V0xw"

        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
