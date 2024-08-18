import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-12">
      <h1 className="text-xl font-semibold text-white">{title}</h1>

      <div className="flex no-scrollbar overflow-x-scroll py-2">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
