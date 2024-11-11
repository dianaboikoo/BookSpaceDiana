/*Made by Diana Boiko*/
import React, { useState } from "react";
import PropTypes from "prop-types";

const DATABASE_URL = "https://bookspace-f063f-default-rtdb.firebaseio.com/reviews";

const AccountReviewCard = ({ review, onReviewUpdated, onReviewDeleted }) => {
  const [isEditing, setIsEditing] = useState(false); // Tracks edit mode
  const [editedContent, setEditedContent] = useState(review.usercomment); // Edited comment
  const [editedRating, setEditedRating] = useState(review.userrating); // Edited rating

  const handleUpdate = async () => {
    try {
      const updatedReview = {
        ...review,
        usercomment: editedContent,
        userrating: editedRating,
        updated_at: new Date().toISOString(),
      };

      const response = await fetch(`${DATABASE_URL}/${review.id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedReview),
      });

      if (!response.ok) throw new Error("Failed to update review");

      onReviewUpdated(updatedReview); // Update review in parent component
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating review:", error);
      alert("An error occurred while updating the review. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}/${review.id}.json`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete review");

      onReviewDeleted(review.id); // Remove review in parent component
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("An error occurred while deleting the review. Please try again.");
    }
  };

  return (
    <div className="account-review-card">
      <div className="review-header">
        <img src={review.userpicture} alt={`${review.username} profile`} className="review-avatar" />
        <div className="review-info">
          <p className="review-username">{review.username}</p>
          <p className="review-date">{new Date(review.userdate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="review-rating">
        {isEditing ? (
          <input
            type="number"
            min="1"
            max="5"
            value={editedRating}
            onChange={(e) => setEditedRating(Number(e.target.value))}
            className="edit-rating-input"
          />
        ) : (
          "★".repeat(review.userrating) + "☆".repeat(5 - review.userrating)
        )}
      </div>

      {isEditing ? (
        <textarea
          className="edit-comment-input"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p className="review-comment">{review.usercomment}</p>
      )}

      <div className="review-actions">
        {isEditing ? (
          <>
            <button onClick={handleUpdate} className="save-button">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

AccountReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userpicture: PropTypes.string.isRequired,
    userrating: PropTypes.number.isRequired,
    usercomment: PropTypes.string.isRequired,
    userdate: PropTypes.string.isRequired,
  }).isRequired,
  onReviewUpdated: PropTypes.func.isRequired,
  onReviewDeleted: PropTypes.func.isRequired,
};

export default AccountReviewCard;
