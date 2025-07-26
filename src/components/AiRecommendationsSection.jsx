import SearchBar from "./SearchBar";
import RecommendationsPage from "./RecommendationsPage";
import { useState } from "react";
import ShimmerCarousel from "./ShimmerUI";
// import { useSelector } from "react-redux";
// import MovieList from "./MovieList";
export default function AiRecommendationsSection() {
  const [showLoader, setShowLoader] = useState(false);
  // const { aiRecommends, movieNames } = useSelector(
  //   (store) => store?.aiRecommendations
  // );
  // if (!movieNames) return null;
  return (
    <div className="bg-[url('/backgroundImage1.jpg')] bg-top min-h-screen bg-repeat bg-contain w-full ">
      <SearchBar setShowLoader={setShowLoader} />
      {showLoader ? <ShimmerCarousel /> : <RecommendationsPage />}
    </div>
  );
}
