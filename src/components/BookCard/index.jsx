import React from 'react';

import styles from './BookCard.module.scss';
import defaultBook from '../../img/book.png';
import BookModal from '../BookModule';

const BookCard = ({ ...book }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors && book.volumeInfo.authors.join(', ');
  const imageUrl = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
  const category = book.volumeInfo.categories && book.volumeInfo.categories[0];

  return (
    <>
      {openModal && (
        <BookModal
          clickToClose={() => setOpenModal(false)}
          title={title}
          authors={authors}
          imageUrl={imageUrl ? imageUrl : defaultBook}
          book={book}
        />
      )}
      <div className={styles.bookCard} onClick={() => setOpenModal(true)}>
        <div className={styles.header}>
          <img src={imageUrl ? imageUrl : defaultBook} alt="book" />
        </div>
        <div className={styles.footer}>
          <div>
            <h3>{title}</h3>
            <h5>{authors}</h5>
          </div>
          <h6>{category}</h6>
        </div>
      </div>
    </>
  );
};

export default BookCard;
