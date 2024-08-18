import React from "react";

const VideoInfo = ({ title, overview }) => {
  return (
    <div className="pt-32 px-14 w-4/12 bg-yellow-300">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="my-5 font-semibold text-sm">{overview}</p>
      <div className="flex">
        <button className="bg-slate-400 w-32 p-3 rounded-lg">▶️ Play</button>
        <button className="bg-slate-400 w-32 p-3 rounded-lg mx-3">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
