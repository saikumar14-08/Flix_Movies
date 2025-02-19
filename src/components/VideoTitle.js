const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black/80">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-md text-justify w-2/4">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-2 px-4 text-l  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-4 text-l bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
