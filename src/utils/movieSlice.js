import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer(state, action) {
      state.movieTrailer = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
