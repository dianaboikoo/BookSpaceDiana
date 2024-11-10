/*Made by Diana Boiko*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/HomePageStyle.css";

const ReviewCard = ({ review, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(review.usercomment);

  const handleSave = () => {
    onEdit(review.id, { ...review, usercomment: editedText });
    setIsEditing(false);
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <img src={review.userpicture} alt={`${review.username} profile`} className="review-avatar" />
        <div className="review-info">
          <p className="review-username">{review.username}</p>
          <p className="review-date">{new Date(review.userdate).toLocaleDateString()}</p>
        </div>
        <i className="review-options">•••</i>
      </div>
      <div className="review-rating">{"★".repeat(review.userrating)}{"☆".repeat(5 - review.userrating)}</div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <p className="review-comment">{review.usercomment}</p>
      )}
      <div className="review-actions">
        <button className="edit-button" onClick={() => setIsEditing(true)}>✏️ Edit</button>
        <button className="delete-button" onClick={() => onDelete(review.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userpicture: PropTypes.string.isRequired,
    userrating: PropTypes.number.isRequired,
    usercomment: PropTypes.string.isRequired,
    userdate: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ReviewCard;
