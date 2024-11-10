/*Made by Diana Boiko*/
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/HomePageStyle.css";

const BookCover = ({ bookId }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchBookCover = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books/${bookId}.json`);
        const data = await response.json();
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching book cover:", error);
      }
    };

    fetchBookCover();
  }, [bookId]);

  return (
    <div className="book-cover">
      <img src={image} alt="Book cover" />
    </div>
  );
};

BookCover.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookCover;
