import React from 'react';

import BookCard from './BookCard';
import BookSkeleton from './BookCard/Skeleton';

const BooksContainer = ({ books, status, total, searchInput, setStartIndex }) => {
  if ((!total && status === 'firstLoad') || (!searchInput && !total && status === 'loaded'))
    return <h2 className="message">Выполните поиск по книгам</h2>;

  if (!total && status === 'loaded')
    return <h2 className="message">По вашему запросу книг не найденно</h2>;

  if (status === 'error') return <h2 className="message">Не удалось выполнить поиск по книгам</h2>;

  return (
    <>
      {status === 'loaded' && (
        <div className="total">
          <h4>Total books found - {total}</h4>
        </div>
      )}
      <div className="container container__books">
        {(status === 'loading' ? [...Array(30)] : books).map((book, index) =>
          status === 'loading' ? <BookSkeleton key={index} /> : <BookCard key={index} {...book} />,
        )}
      </div>
      {status === 'loaded' && (
        <div className="container__loadmore">
          <button className="btn btn-loadmore" onClick={() => setStartIndex((s) => s + 30)}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default BooksContainer;
