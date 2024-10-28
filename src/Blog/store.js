import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogslice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

export default store;
