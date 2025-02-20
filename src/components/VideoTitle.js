const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[30%] md:pt-[25%] px-6 sm:px-12 absolute text-white bg-gradient-to-r from-black/80">
      <h1 className="text-sm md:text-2xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-md text-justify w-full sm:w-2/4">
        {overview}
      </p>
      <div className="sm:flex gap-3 hidden sm:gap-4">
        <button className="bg-white text-black p-2 md:p-2 md:px-4 text-sm md:text-l rounded-full  md:rounded-lg hover:bg-opacity-80">
          <span className="block md:hidden"> ▶️ </span>
          <span className="hidden md:block"> ▶️ Play </span>
        </button>
        <button className="bg-gray-500 text-white p-2 md:p-2 md:px-4 text-sm md:text-l bg-opacity-50 rounded-full md:rounded-lg">
          <span className="block md:hidden">ℹ️</span>
          <span className="hidden md:block">ℹ️ More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
