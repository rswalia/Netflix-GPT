import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../utils/moviesSlice";

const useGetTrailer = (id) => {
  //   const [key, setKey] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieTrailerKey(id);
  }, []);

  const getMovieTrailerKey = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      options
    );
    const json = await data.json();
    const allMovies = json.results;
    // console.log(allMovies);

    const filteredMovies = allMovies.filter(
      (movie) => movie.type === "Trailer"
    );
    // console.log(filteredMovies);

    // if movie has NO Trailer
    // filteredMovies ? setKey(filteredMovies[0].key) : setKey(allMovies[0].key);
    filteredMovies
      ? dispatch(addVideoTrailer(filteredMovies[0].key))
      : dispatch(addVideoTrailer(allMovies[0].key));
  };
};

export default useGetTrailer;
