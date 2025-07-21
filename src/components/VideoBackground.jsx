import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";

export default function VideoBackground({ movieId }) {
  useFetchMovieTrailer(movieId);

  const movieTrailer = useSelector((store) => store?.movies?.movieTrailer);
  console.log(movieTrailer);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movieTrailer?.key}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
