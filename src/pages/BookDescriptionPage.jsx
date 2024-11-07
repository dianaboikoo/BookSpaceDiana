import React from 'react';
import { useParams } from "react-router-dom";
import BookSection from '../components/BookSection';
import BottomNav from '../components/BottomNav';
import BookCover from "../components/BookCover";
import BookTitle from "../components/BookTitle";
import BookStats from "../components/BookStats";
import BookActions from '../components/BookActions';
import BookDescription from "../components/BookDescription";
import ReviewSection from "../components/ReviewSection";
import '../styles/HomePageStyle.css';

export default function BookDescriptionPage() {
  const { bookId } = useParams();

  if (!bookId) {
    return <p>Book ID not found in URL.</p>;
  }

  return (
    <div className="book-page">
      <BookCover bookId={bookId} />
      <BookTitle bookId={bookId} />
      <BookActions />
      <BookStats bookId={bookId} />
      <BookDescription bookId={bookId} />

      <BookSection title="Other Books by this Author" />
      <BookSection title="Similar books" />
      <ReviewSection bookId={bookId} />
      <BottomNav />
    </div>
  );
}

