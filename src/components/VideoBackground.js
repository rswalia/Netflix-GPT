import React from "react";
import useGetTrailer from "../hooks/useGetTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const key = useSelector((store) => store.movies?.videoTrailer);

  // Fetch Trailer of mainMovie (KEY) & add to Redux Store
  useGetTrailer(id);

  return (
    <div>
      <iframe
        className="w-full h-screen"
        height="315"
        src={"https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
