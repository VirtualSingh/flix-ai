import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function MoviesSection() {
  const movies = useSelector((store) => store?.movies);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-30 relative z-30 px-4">
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MovieList title="Action" movies={movies?.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies?.nowPlayingMovies} />
          <MovieList title="Favourites" movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
}
