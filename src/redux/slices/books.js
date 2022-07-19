import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async ({ search, sortBy, category, startIndex }) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}${
        category !== 'all' ? `+categories:${category}` : ''
      }&key=AIzaSyDJeEgtxKPHogkr7nGd0_D40-CevFxMrv0&maxResults=30&orderBy=${sortBy}&startIndex=${startIndex}`,
    );
    return data;
  },
);

const initialState = {
  books: {
    items: [],
    total: 0,
    status: 'firstLoad',
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.books.items = [];
      state.books.total = 0;
      state.books.status = 'loading';
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books.items = action.payload.items;
      state.books.total = action.payload.totalItems;
      state.books.status = 'loaded';
    },
    [fetchBooks.rejected]: (state) => {
      state.books.items = [];
      state.books.total = 0;
      state.books.status = 'error';
    },
  },
});

export const booksReducer = booksSlice.reducer;
