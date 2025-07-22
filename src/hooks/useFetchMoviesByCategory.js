import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiURL } from "../utils/constants";

export default function useFetchMoviesByCategory(category, dispatchMethod) {
  const dispatch = useDispatch();
  async function fetchMovies() {
    try {
      const response = await fetch(getApiURL(category), API_OPTIONS);
      const json = await response.json();
      dispatch(dispatchMethod(json.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);
}
