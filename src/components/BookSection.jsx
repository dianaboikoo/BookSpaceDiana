import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

function BookSection({ title }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books.json`);
        const data = await response.json();

        // Transform Firebase object into an array of book objects
        const booksArray = Object.keys(data).map((key) => ({
          ...data[key], // Spread each book's details
          firebaseKey: key, // Optional: Add Firebase key for reference if needed
        }));

        setBooks(booksArray);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [title]);

  return (
    <div className="book-section">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="more-button">More &gt;</button>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

BookSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookSection;
