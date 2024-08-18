import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black px-14">
      <div className="-mt-32 relative">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Trending Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Top 10 in India"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

/*
  MovieList
    - ListTitle (Now Playing)
    - MovieCard * N
        
  MovieList
    - ListTitle (Trending)
    - MovieCard * N

  MovieList
    - ListTitle (Popular)
    - MovieCard * N      
*/
