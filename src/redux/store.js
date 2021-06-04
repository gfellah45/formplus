import { configureStore } from "@reduxjs/toolkit";
import templates from "./template";

const store = configureStore({
  reducer: {
    templates,
  },
});

export default store;
