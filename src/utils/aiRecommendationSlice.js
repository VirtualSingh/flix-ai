import { createSlice } from "@reduxjs/toolkit";

const aiRecommendationSlice = createSlice({
  name: "aiRecommendations",
  initialState: {
    toggleAi: false,
    aiRecommends: null,
    movieNames: null,
  },
  reducers: {
    switchToAi(state) {
      state.toggleAi = !state.toggleAi;
    },
    addAiRecommends(state, action) {
      const { movieNames, movieResults } = action.payload;
      state.aiRecommends = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { switchToAi, addAiRecommends } = aiRecommendationSlice.actions;
export default aiRecommendationSlice.reducer;
