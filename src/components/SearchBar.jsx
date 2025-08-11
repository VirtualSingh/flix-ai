import { useRef, useState } from "react";
import gemini from "../utils/gemini";
import { API_OPTIONS, enhancedPrompt } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAiRecommends } from "../utils/aiRecommendationSlice";
import NoMoviesFound from "./NoMoviesFound";

export default function SearchBar({ setShowLoader }) {
  const [noMovieFound, setNoMovieFound] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  async function searchMovieInTMDB(movieName) {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  }
  async function handleSearch() {
    const searchText = inputRef.current.value;
    if (searchText.length > 3) {
      setShowLoader(true);
      const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: enhancedPrompt(searchText),
        config: {
          thinkingConfig: {
            thinkingBudget: 0, // Disables thinking
          },
        },
      });
      if (response?.text == "No movies found") {
        setShowLoader(false);
        setNoMovieFound(true);
      } else {
        const moviesArray = response?.text.split(",");
        const promiseArray = moviesArray.map((movie) =>
          searchMovieInTMDB(movie)
        );
        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
        dispatch(
          addAiRecommends({
            movieNames: moviesArray,
            movieResults: tmdbResults,
          })
        );
        setShowLoader(false);
      }
    }
  }

  //   ------------
  return (
    <>
      <div className="flex justify-center pt-12 sm:pt-16 pb-10 sm:pb-12 px-2 sm:px-4">
        <div className="w-full max-w-4xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[rgba(0,0,0,0.8)] grid grid-cols-1 sm:grid-cols-12 gap-4 text-white rounded-lg p-4"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="What would you like to watch?"
              className="bg-gray-800 rounded-lg p-3 sm:p-4 col-span-1 sm:col-span-9 w-full"
            />
            <button
              onClick={handleSearch}
              className="py-3 px-4 text-base sm:text-xl font-semibold text-white col-span-1 sm:col-span-3 bg-red-700 rounded-lg w-full"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {noMovieFound && <NoMoviesFound />}
    </>
  );
}
