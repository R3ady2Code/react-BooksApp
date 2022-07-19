import React from 'react';

import style from './BookModal.module.scss';

const BookModal = ({ clickToClose, title, authors, imageUrl, book }) => {
  return (
    <div className={style.bookModal}>
      <button className={style.close} onClick={clickToClose}>
        X
      </button>
      <div className={style.content}>
        <div className={style.left}>
          <img src={imageUrl} alt="bookImg" />
        </div>
        <div className={style.right}>
          <h2>{title}</h2>
          <h3>{book.volumeInfo.subtitle && `"${book.volumeInfo.subtitle}"`}</h3>
          <h4>{authors && `Authors: ${authors}`}</h4>
          <h5>
            {book.volumeInfo.categories && book.volumeInfo.categories.join(',')}
            {book.volumeInfo.categories && ', '}
            {book.volumeInfo.publishedDate}
          </h5>
          <p>{book.volumeInfo.description}</p>
          {book.saleInfo.isEbook && (
            <button className="btn btn-buy" onClick={() => {}}>
              Buy
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
