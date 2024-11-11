/*Made by Diana Boiko*/
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BookTitle = ({ bookId }) => {
  const [title, setTitle] = useState(""); // Stores book title
  const [author, setAuthor] = useState(""); // Stores book author

  useEffect(() => {
    const fetchBookTitle = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books/${bookId}.json`);
        const data = await response.json();
        setTitle(data.title);
        setAuthor(data.author);
      } catch (error) {
        console.error("Error fetching book title:", error);
      }
    };

    fetchBookTitle(); // Fetch book details on load
  }, [bookId]);

  return (
    <div className="book-title-section">
      <h1 className="book-title-description">{title}</h1> {/* Displays book title */}
      <p className="book-author">by {author}</p> {/* Displays author name */}
    </div>
  );
};

BookTitle.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookTitle;
