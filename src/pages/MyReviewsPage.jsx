/*Made by Diana Boiko*/
import React, { useEffect, useState } from 'react';
import AccountReviewCard from '../components/AccountReviewCard';
import BottomNav from '../components/BottomNav';
import "../styles/AccountPageStyle.css";

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews.json`);
        const data = await response.json();

        // Convert object to array
        const reviewsArray = data
          ? Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }))
          : [];

        setReviews(reviewsArray);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="my-reviews-page">
      <h2>My reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <AccountReviewCard key={review.id} review={review} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default MyReviewsPage;
