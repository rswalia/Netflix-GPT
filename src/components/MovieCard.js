import React from "react";
import { MOVIE_CARD_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 h-60 pr-4">
      <img
        src={MOVIE_CARD_CDN + posterPath}
        alt="movie-card"
        className="w-full h-full object-contain rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
