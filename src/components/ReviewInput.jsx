/*Made by Diana Boiko*/
import React, { useState } from "react";
import "../styles/HomePageStyle.css";

const ReviewInput = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    if (reviewText.trim()) {
      const newReview = {
        username: "JohnDoe", // Set appropriate username or get it from user state
        userpicture: "profile.jpg", // Placeholder or actual profile URL
        userrating: 4, // Set rating here or add input for it
        usercomment: reviewText,
        userdate: new Date().toISOString(),
      };
      onAddReview(newReview);
      setReviewText("");
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
