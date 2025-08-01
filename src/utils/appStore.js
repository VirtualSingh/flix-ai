import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import aiRecommendationsReducer from "./aiRecommendationSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    aiRecommendations: aiRecommendationsReducer,
  },
});
export default appStore;
