import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BookStats = ({ bookId }) => {
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchBookStats = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books/${bookId}.json`);
        const data = await response.json();
        setGenre(data.genre);
        setPages(data.numberOfPages);
        setRating(data.rating);
      } catch (error) {
        console.error("Error fetching book stats:", error);
      }
    };

    fetchBookStats();
  }, [bookId]);

  return (
    <div className="book-stats">
      <span>⭐️ {rating} </span>
      <span>📚 {genre}</span>
      <span>📖 {pages} pages</span> 
    </div>
  );
};

BookStats.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookStats;
