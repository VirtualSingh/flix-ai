const ShimmerMovieCard = () => {
  return (
    <div className="relative w-80 h-48 rounded-2xl overflow-hidden bg-gray-800 animate-pulse">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer"></div>

      {/* Content placeholders */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top section - Duration and rating */}
        <div className="flex justify-between items-start">
          <div className="bg-gray-700 h-4 w-12 rounded"></div>
          <div className="bg-gray-700 h-6 w-16 rounded-full"></div>
        </div>

        {/* Bottom section */}
        <div className="space-y-3">
          {/* Play button placeholder */}
          <div className="flex justify-center">
            <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
          </div>

          {/* Title and info */}
          <div className="text-center space-y-2">
            <div className="bg-gray-700 h-5 w-48 mx-auto rounded"></div>
            <div className="bg-gray-700 h-3 w-32 mx-auto rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShimmerCarousel = () => {
  return (
    <div className="mb-8 overflow-hidden">
      {/* <div className="flex items-center justify-between mb-4 px-4">
        <div className="bg-gray-700 h-6 w-32 rounded animate-pulse"></div>
      </div> */}

      <div className="relative group px-4">
        {/* Shimmer navigation buttons */}
        {/* <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 h-12 w-12 rounded-full animate-pulse"></div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 h-12 w-12 rounded-full animate-pulse"></div> */}

        {/* Shimmer cards container */}
        <div className="flex flex-wrap justify-center gap-6 py-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <ShimmerMovieCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShimmerCarousel;
