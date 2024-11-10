/*Made by Diana Boiko*/
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const BookDescription = ({ bookId }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchBookDescription = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/books/${bookId}.json`);
        const data = await response.json();
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching book description:", error);
      }
    };

    fetchBookDescription();
  }, [bookId]);

  return (
    <div className="book-description">
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
};

BookDescription.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookDescription;
