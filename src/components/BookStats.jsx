/*Made by Diana Boiko*/
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BookStats = ({ bookId }) => {
  const [genre, setGenre] = useState(""); // Stores book genre
  const [pages, setPages] = useState(0); // Stores book page count
  const [rating, setRating] = useState(0); // Stores book rating

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

    fetchBookStats(); // Fetches book stats on component load
  }, [bookId]);

  return (
    <div className="book-stats">
      <span>⭐️ {rating} </span> {/* Displays book rating */}
      <span>📚 {genre}</span> {/* Displays book genre */}
      <span>📖 {pages} pages</span> {/* Displays number of pages */}
    </div>
  );
};

BookStats.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookStats;
