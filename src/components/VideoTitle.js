const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[25%] px-6 sm:px-12 absolute text-white bg-gradient-to-r from-black/80">
      <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-md text-justify w-full sm:w-2/4">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="bg-white text-black p-2 px-4 text-l rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-4 text-l bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
