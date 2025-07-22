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

export const enhancedPrompt = (userPrompt) => {
  return `
  You are an intelligent movie recommendation assistant.

Your task is to suggest a list of real, existing movie titles based on the user's request.
Return only a valid comma-separated list of movie names only, with each string being the exact name of a movie.

Do not include any explanations, descriptions, or formatting.

User prompt: "${userPrompt}"`.trim();
};
