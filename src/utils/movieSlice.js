import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    // Two
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload
    }
  }
})

export const {addMovie, addMovieTrailer} = movieSlice.actions;

export default movieSlice.reducer