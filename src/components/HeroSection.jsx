import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";

export default function HeroSection() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const { title, overview, id } = movies[0];

  return (
    <div className="relative aspect-video">
      <VideoInfo movieTitle={title} movieDescription={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
