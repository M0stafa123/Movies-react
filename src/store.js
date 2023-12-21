import { configureStore } from "@reduxjs/toolkit";
import Moviereducer from "./reducers/Moviereducer";
export const store = configureStore({
  reducer: {
    Movies: Moviereducer,
  },
});
