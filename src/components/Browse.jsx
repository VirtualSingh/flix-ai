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
import Footer from "./Footer";

export default function Browse() {
  useFetchMoviesByCategory(
    "now_playing",
    addNowPlayingMovies,
    (state) => state.movies.nowPlayingMovies
  );
  useFetchMoviesByCategory(
    "popular",
    addPopularMovies,
    (state) => state?.movies.popularMovies
  );
  useFetchMoviesByCategory(
    "upcoming",
    addUpcomingMovies,
    (state) => state.movies.upcomingMovies
  );
  useFetchMoviesByCategory(
    "top_rated",
    addTopRatedMovies,
    (state) => state.movies.topRatedMovies
  );
  let toggleAi = useSelector((store) => store?.aiRecommendations?.toggleAi);
  // toggleAi = true;
  return (
    <div className="bg-black">
      <Header />
      {toggleAi ? (
        <AiRecommendationsSection />
      ) : (
        <>
          <HeroSection />
          <MoviesSection />
        </>
      )}
      <Footer />
    </div>
  );
}
