import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptToggle from "./gptSlice";
import { changeLanguage } from "./configSlice";

const appStore = configureStore({
  reducer:{
    user: userReducer,
    movies: moviesReducer,
    gpttoggle: gptToggle,
    config: changeLanguage
  },
})

export default appStore