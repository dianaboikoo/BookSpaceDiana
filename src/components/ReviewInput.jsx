/*Made by Diana Boiko*/
import React, { useState } from "react";
import "../styles/HomePageStyle.css";

const ReviewInput = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState(""); // Holds the input text for new review

  const handleSubmit = () => {
    if (reviewText.trim()) {
      const newReview = {
        username: "JohnDoe", // Placeholder username
        userpicture: "profile.jpg", // Placeholder profile picture
        userrating: 4, // Placeholder rating
        usercomment: reviewText,
        userdate: new Date().toISOString(),
      };
      onAddReview(newReview); // Calls parent function to add review
      setReviewText(""); // Clears input field
    }
  };

  return (
    <div className="review-input">
      <div className="review-input-container">
        <i className="user-icon">👤</i>
        <input
          type="text"
          placeholder="Write a review"
          className="review-input-field"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="review-submit-button" onClick={handleSubmit}>✈️</button>
      </div>
    </div>
  );
};

export default ReviewInput;
