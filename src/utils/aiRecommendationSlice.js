import { createSlice } from "@reduxjs/toolkit";

const aiRecommendationSlice = createSlice({
  name: "aiRecommendations",
  initialState: {
    toggleAi: false,
  },
  reducers: {
    switchToAi(state) {
      state.toggleAi = !state.toggleAi;
    },
  },
});

export const { switchToAi } = aiRecommendationSlice.actions;
export default aiRecommendationSlice.reducer;
