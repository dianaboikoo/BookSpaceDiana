import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BookTitle = ({ bookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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

    fetchBookTitle();
  }, [bookId]);

  return (
    <div className="book-title-section">
      <h1 className="book-title">{title}</h1>
      <p className="book-author">by {author}</p>
    </div>
  );
};

BookTitle.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookTitle;
