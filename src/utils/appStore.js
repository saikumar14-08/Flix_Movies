import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptToggle from "./gptSlice";
import selectedLanguage from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptToggle,
    config: selectedLanguage,
  },
});

export default appStore;
