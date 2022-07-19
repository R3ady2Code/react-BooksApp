import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './slices/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
