import Header from "./Header";
import MoviesSection from "./MoviesSection";
import HeroSection from "./HeroSection";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} from "../utils/movieSlice";
import useFetchMoviesByCategory from "../hooks/useFetchMoviesByCategory";
import { useSelector } from "react-redux";
import AiRecommendationsSection from "./AiRecommendationsSection";

export default function Browse() {
  useFetchMoviesByCategory("now_playing", addNowPlayingMovies);
  useFetchMoviesByCategory("popular", addPopularMovies);
  useFetchMoviesByCategory("upcoming", addUpcomingMovies);
  useFetchMoviesByCategory("top_rated", addTopRatedMovies);
  const toggleAi = useSelector((store) => store?.aiRecommendations?.toggleAi);
  return (
    <div>
      <Header />
      {toggleAi ? (
        <AiRecommendationsSection />
      ) : (
        <>
          <HeroSection />
          <MoviesSection />
        </>
      )}
    </div>
  );
}
