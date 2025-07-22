import SearchBar from "./SearchBar";
import RecommendationsPage from "./RecommendationsPage";
export default function AiRecommendationsSection() {
  return (
    <div className="bg-[url('/backgroundImage1.jpg')] bg-cover bg-center h-screen flex items-center justify-center ">
      <div className="w-2/3 rounded-2xl">
        <SearchBar />
        <RecommendationsPage />
      </div>
    </div>
  );
}
