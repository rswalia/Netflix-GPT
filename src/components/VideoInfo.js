import React from "react";

const VideoInfo = ({ title, overview }) => {
  return (
    <div className="pt-32 w-full h-screen px-14 w-4/12 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl py-4 font-serif font-bold text-red-600 bg-white bg-opacity-70 rounded-lg w-4/12">
        {title}
      </h1>
      <p className="my-5 font-sans text-sm text-white w-4/12">{overview}</p>
      <div className="flex">
        <button className="bg-white w-32 p-3 rounded-lg text-black font-semibold hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-600 bg-opacity-60 w-32 p-3 rounded-lg text-white font-semibold mx-3 hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
