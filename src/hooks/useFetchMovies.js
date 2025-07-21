import { API_OPTIONS, TMDB_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export default function useFetchMovies() {
  const dispatch = useDispatch();
  async function fetchMovies() {
    try {
      const response = await fetch(TMDB_API_URL, API_OPTIONS);
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);
}
