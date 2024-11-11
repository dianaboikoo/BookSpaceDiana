/*Made by Diana Boiko*/
import React, { useEffect, useState } from 'react';
import AccountReviewCard from '../components/AccountReviewCard';
import BottomNav from '../components/BottomNav';
import "../styles/AccountPageStyle.css";

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]); // State to store fetched reviews

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews.json`);
        const data = await response.json();

        // Convert Firebase data object to array of reviews
        const reviewsArray = data
          ? Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }))
          : [];

        setReviews(reviewsArray); // Update state with fetched reviews
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews(); // Fetch reviews on initial render
  }, []);

  return (
    <div className="my-reviews-page">
      <h2>My reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <AccountReviewCard key={review.id} review={review} /> // Render individual review cards
        ))}
      </div>
      <BottomNav /> {/* Bottom navigation for accessing other sections */}
    </div>
  );
};

export default MyReviewsPage;
