import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt toggle",
  initialState: {
    gptSearch: false,
    gptMoviesNames: null,
    tmdbMovieRes: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    gptMovies: (state, action) => {
      const { gptMoviesNames, tmdbMovieRes } = action.payload;
      state.gptMoviesNames = gptMoviesNames;
      state.tmdbMovieRes = tmdbMovieRes;
    },
  },
});

export const { toggleGPTSearch, gptMovies } = gptSlice.actions;

export default gptSlice.reducer;
