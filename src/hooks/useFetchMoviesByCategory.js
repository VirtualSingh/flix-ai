import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiURL } from "../utils/constants";

export default function useFetchMoviesByCategory(
  category,
  dispatchMethod,
  selector
) {
  const dispatch = useDispatch();
  const movies = useSelector(selector);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(getApiURL(category), API_OPTIONS);
        const json = await response.json();
        dispatch(dispatchMethod(json.results));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    if (!movies || movies.length === 0) {
      fetchMovies(); // Only fetch if data is not present
    }
  }, [dispatch, dispatchMethod, category, movies]);
}
