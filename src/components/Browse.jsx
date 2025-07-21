import useFetchMovies from "../hooks/useFetchMovies";
import Header from "./Header";
import MoviesSection from "./MoviesSection";
import HeroSection from "./HeroSection";

export default function Browse() {
  useFetchMovies();
  return (
    <div>
      <Header />
      <HeroSection />
      <MoviesSection />
    </div>
  );
}
