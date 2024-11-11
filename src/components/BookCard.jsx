/*Made by Diana Boiko*/
import PropTypes from 'prop-types';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" /> {/* Book cover image */}
      <p className="book-title">{book.title}</p> {/* Book title */}
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,  
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default BookCard;
