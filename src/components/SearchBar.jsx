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
      <div className="flex justify-center pt-16 pb-12 px-4">
        <div className="w-full max-w-4xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[rgba(0,0,0,0.8)] grid grid-cols-12 text-white rounded-lg "
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="What would you like to watch? "
              className="col-span-9 bg-gray-800 rounded-lg m-4 p-4"
            />
            <button
              className="py-2 px-4 text-xl m-4 font-semibold text-white col-span-3 bg-red-700 rounded-lg cursor-pointer"
              onClick={handleSearch}
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
