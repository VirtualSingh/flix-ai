export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
};
export const TMDB_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";

export const getApiURL = (endpoint) =>
  `https://api.themoviedb.org/3/movie/${endpoint}?&page=1`;
