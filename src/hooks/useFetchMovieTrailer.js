import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export default function useFetchMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  async function fetchTrailer() {
    const data = await fetch(url, API_OPTIONS);
    const { results } = await data.json();
    const trailers = results.filter((x) => x.type == "Trailer");
    const movieTrailer = trailers.length ? trailers[0] : results[0];
    dispatch(addMovieTrailer(movieTrailer));
  }
  useEffect(() => {
    fetchTrailer();
  }, []);
}
