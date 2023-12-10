import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice ({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieNames: null,
    results: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovies: (state, action) => {
      const {movieNames, results} = action.payload;
      state.movieNames = movieNames;
      state.results = results;
    },
  },
});

export const { toggleGptSearchView, addSearchMovies } = gptSlice.actions
export default gptSlice.reducer;