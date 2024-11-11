/*Made by Diana Boiko*/
import "../styles/AccountPageStyle.css";

const ReviewActions = () => {
  return (
    <div className="review-actions">
      <button className="helpful-button">👍 Helpful (1)</button> {/* Marks review as helpful */}
      <button className="not-helpful-button">👎 Not helpful (1)</button> {/* Marks review as not helpful */}
    </div>
  );
};

export default ReviewActions;
