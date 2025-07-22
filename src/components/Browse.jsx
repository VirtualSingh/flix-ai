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

export default function Browse() {
  useFetchMoviesByCategory("now_playing", addNowPlayingMovies);
  useFetchMoviesByCategory("popular", addPopularMovies);
  useFetchMoviesByCategory("upcoming", addUpcomingMovies);
  useFetchMoviesByCategory("top_rated", addTopRatedMovies);
  return (
    <div>
      <Header />
      <HeroSection />
      <MoviesSection />
    </div>
  );
}
