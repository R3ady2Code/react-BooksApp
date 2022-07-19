import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './redux/slices/books';

import SearchContainer from './components/SearchContainer';
import BooksContainer from './components/BooksContainer';

function App() {
  const { books } = useSelector((state) => state.books);
  const [loadedBooks, setLoadedBooks] = React.useState([]);

  const [searchInput, setSearchInput] = React.useState('');
  const [category, setCategory] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('relevance');
  const [startIndex, setStartIndex] = React.useState(30);

  const dispatch = useDispatch();

  const searchForBooks = async () => {
    dispatch(fetchBooks({ search: searchInput, sortBy, category, startIndex }));
  };

  React.useEffect(() => {
    if (books.items.length) {
      setLoadedBooks((s) => s.concat(books.items));
    }
  }, [books]);

  React.useEffect(() => {
    if (books.status !== 'firstLoad') {
      setLoadedBooks([]);
      searchForBooks();
    }
  }, [category, sortBy]);

  React.useEffect(() => {
    if (books.status !== 'firstLoad') searchForBooks();
  }, [startIndex]);

  return (
    <div className="App">
      <SearchContainer
        setSearchInput={setSearchInput}
        setCategory={setCategory}
        setSortBy={setSortBy}
        searchForBooks={searchForBooks}
      />
      <BooksContainer
        books={loadedBooks}
        total={books.total}
        status={books.status}
        searchInput={searchInput}
        setStartIndex={setStartIndex}
      />
    </div>
  );
}

export default App;
