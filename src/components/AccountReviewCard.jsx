import React from 'react';
import PropTypes from 'prop-types';
import "../styles/AccountPageStyle.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="account-review-card">
      <div className="review-header">
        <img src={review.userpicture} alt={`${review.username} profile`} className="review-avatar" />
        <div className="review-info">
          <p className="review-username">{review.username}</p>
          <p className="review-date">{new Date(review.userdate).toLocaleDateString()}</p>
        </div>
        <i className="review-options">•••</i>
      </div>
      <div className="review-rating">{"★".repeat(review.userrating)}{"☆".repeat(5 - review.userrating)}</div>
      <p className="review-comment">{review.usercomment}</p>
      <div className="review-actions">
        <button className="helpful-button">👍 Helpful (1)</button>
        <button className="not-helpful-button">👎 Not helpful (1)</button>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userpicture: PropTypes.string.isRequired,
    userrating: PropTypes.number.isRequired,
    usercomment: PropTypes.string.isRequired,
    userdate: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
