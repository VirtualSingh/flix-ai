import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";

export default function VideoBackground({ movieId }) {
  useFetchMovieTrailer(movieId);
  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);

  return (
    movieTrailer && (
      <div className="absolute inset-0 overflow-hidden z-0">
        <iframe
          className="aspect-video w-full h-full absolute top-0 left-0 pointer-events-none object-cover scale-[1.3]"
          src={
            "https://www.youtube.com/embed/" +
            movieTrailer?.key +
            "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
            movieTrailer?.key +
            "&modestbranding=1&showinfo=0&rel=0"
          }
          allow="autoplay; "
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    )
  );
}
