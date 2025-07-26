import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";
import { useRef } from "react";

export default function HeroSection() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const randomIndexRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  if (randomIndexRef.current === null) {
    randomIndexRef.current = Math.floor(Math.random() * movies.length);
  }

  const randomMovie = movies[randomIndexRef.current];

  const { title, overview, id } = randomMovie;

  return (
    <div className="relative aspect-video bg-black">
      <VideoInfo movieTitle={title} movieDescription={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
