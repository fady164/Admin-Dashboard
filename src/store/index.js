import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";

export const store = configureStore({
   reducer: {
      books: booksReducer,
   },
});
