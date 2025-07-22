import { Play, Star, Clock } from "lucide-react";
import { Fragment } from "react";
export default function MovieCard({
  title,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,

  genre_ids = [],
}) {
  const genreMap = {
    14: "Fantasy",
    10751: "Family",
    28: "Action",
    35: "Comedy",
    18: "Drama",
    27: "Horror",
    878: "Sci-Fi",
    53: "Thriller",
    16: "Animation",
    12: "Adventure",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const getRandomDuration = () => {
    // Generate a realistic movie duration between 90-180 minutes
    return Math.floor(Math.random() * 90) + 90;
  };

  const duration = getRandomDuration();
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "";
  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
    : "";
  return (
    <div className="relative w-80 h-48 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 "
        style={{
          backgroundImage: `url(${backdropUrl || imageUrl})`,
          backgroundColor: "#1a1a2e",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top Section - Rating and Duration */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <Clock size={14} />
            <span>{duration}M</span>
          </div>

          {vote_average > 0 && (
            <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
              <Star size={12} className="text-yellow-400 fill-current" />
              <span className="text-white text-xs font-medium">
                {vote_average.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Section - Movie Info */}
        <div className="space-y-3">
          {/* Play Button */}
          <div className="flex justify-center">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 rounded-full p-3 group-hover:scale-110">
              <Play size={20} className="text-white fill-current ml-1" />
            </button>
          </div>

          {/* Movie Title */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg leading-tight mb-1 line-clamp-2">
              {title}
            </h3>

            {/* Release Year and Genres */}
            <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
              {release_date && <span>{formatDate(release_date)}</span>}
              {release_date && genre_ids.length > 0 && <span>•</span>}
              {genre_ids.slice(0, 2).map((genreId, index) => (
                <Fragment key={genreId}>
                  {index > 0 && <span>,</span>}
                  <span>{genreMap[genreId] || "Unknown"}</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect - Additional Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
