const NoMoviesFound = ({ searchQuery = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-center border border-white/10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 bg-opacity-60 rounded-full p-6">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">No Movies Found</h3>

        {/* Message */}
        <p className="text-gray-300 mb-2 leading-relaxed">
          {searchQuery
            ? `We couldn't find any movies matching "${searchQuery}"`
            : "We couldn't find any movies at the moment"}
        </p>

        <p className="text-gray-400 text-sm mb-6">
          Please try with something else
        </p>

        {/* Suggestions */}
        <div className="space-y-3">
          <p className="text-gray-300 text-sm font-medium">
            Try searching for:
          </p>
        </div>

        {/* Action Button */}
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black">
          Browse All Movies
        </button>
      </div>
    </div>
  );
};
export default NoMoviesFound;
