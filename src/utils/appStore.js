import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";

const appStore = configureStore({
  reducer:{
    user: userReducer,
    // One
    movie: movieSliceReducer
  },
})

export default appStore