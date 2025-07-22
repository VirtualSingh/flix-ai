import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function MoviesSection() {
  const movies = useSelector((store) => store?.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-30 relative z-30 px-4">
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
