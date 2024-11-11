/*Made by Diana Boiko*/
import { useParams } from "react-router-dom";
import BookSection from '../components/BookSection';
import BottomNav from '../components/BottomNav';
import BookCover from "../components/BookCover";
import BookTitle from "../components/BookTitle";
import BookStats from "../components/BookStats";
import BookActions from '../components/BookActions';
import BookDescription from "../components/BookDescription";
import ReviewSection from "../components/ReviewSection";
import { useNavigate } from "react-router-dom";
import '../styles/HomePageStyle.css';

export default function BookDescriptionPage() {
  const { bookId } = useParams(); // Get book ID from URL params
  const navigate = useNavigate(); // Allows navigation back to previous page

  if (!bookId) {
    return <p>Book ID not found in URL.</p>; // Handles case where no book ID is provided
  }

  return (
    <div className="book-page">
      <button className="back-button" onClick={() => navigate(-1)}>🔙</button> {/* Back navigation */}
      <BookCover bookId={bookId} /> {/* Displays book cover */}
      <BookTitle bookId={bookId} /> {/* Displays book title */}
      <BookActions /> {/* Renders user actions (e.g., save, like) */}
      <BookStats bookId={bookId} /> {/* Shows book statistics */}
      <BookDescription bookId={bookId} /> {/* Renders book description */}

      <BookSection title="Other Books by this Author" /> {/* Section for other books by the author */}
      <BookSection title="Similar books" /> {/* Section for similar books */}
      <ReviewSection bookId={bookId} /> {/* Displays user reviews */}
      <BottomNav /> {/* Bottom navigation bar */}
    </div>
  );
}
