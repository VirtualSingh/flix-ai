import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function RecommendationsPage() {
  const { aiRecommends, movieNames } = useSelector(
    (store) => store?.aiRecommendations
  );
  if (!movieNames) return null;

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-7xl ">
        <div className="bg-[rgba(0,0,0,0.8)] rounded-xl p-6">
          {movieNames.map((movie, index) => (
            <MovieList key={movie} title={movie} movies={aiRecommends[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}
