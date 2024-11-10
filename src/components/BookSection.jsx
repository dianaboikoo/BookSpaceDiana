import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

function BookSection({ title }) {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books.json`);
        const data = await response.json();

        const booksArray = Object.keys(data).map((key) => ({
          ...data[key],
          firebaseKey: key,
        }));

        setBooks(booksArray);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [title]);

  const handleClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="book-section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="more-button">More &gt;</button>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.firebaseKey} onClick={() => handleClick(book.bookId || book.firebaseKey)}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

BookSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookSection;
