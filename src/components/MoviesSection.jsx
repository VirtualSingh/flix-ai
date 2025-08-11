import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function MoviesSection() {
  const movies = useSelector((store) => store?.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 relative z-30 px-2 sm:px-4">
          {movies?.nowPlayingMovies && (
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          )}
          {movies?.topRatedMovies && (
            <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          )}
          {movies?.upcomingMovies && (
            <MovieList title="Upcoming" movies={movies.upcomingMovies} />
          )}
          {movies?.popularMovies && (
            <MovieList title="Popular" movies={movies.popularMovies} />
          )}
        </div>
      </div>
    )
  );
}
