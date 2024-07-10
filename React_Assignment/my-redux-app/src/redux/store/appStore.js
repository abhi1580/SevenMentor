import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counter/CounterSlice";

//centralized redux sore

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
