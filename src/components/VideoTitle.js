import React from "react";

const VideoTitle = ({ title, overview }) => {
  return <div className="pl-16">
    <h1 className="font-bold text-4xl">
      {title}
    </h1>
    <div className="py-4 w-1/2 text-justify">{overview}</div>
    <div className="m4">
      <button className="px-4 py-2 mr-2 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition">▶️Play</button>
      <button className="px-4 py-2 bg-gray-500 bg-opacity-50 text-white border border-gray-400 rounded-md shadow-md hover:bg-opacity-70 transition">ℹMore Info</button>
    </div>
  </div>
};

export default VideoTitle;
