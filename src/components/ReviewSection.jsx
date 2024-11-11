/*Made by Diana Boiko*/
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewInput from "./ReviewInput";
import "../styles/HomePageStyle.css";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]); // Stores reviews data

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews.json`);
        const data = await response.json();

        // Convert Firebase data object to array format
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

    fetchReviews(); // Initial fetch on component load
  }, []);

  // Add a new review
  const addReview = async (newReview) => {
    const response = await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    const data = await response.json();
    setReviews([...reviews, { id: data.name, ...newReview }]); // Update state with new review
  };

  // Delete a review by ID
  const deleteReview = async (id) => {
    await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews/${id}.json`, {
      method: "DELETE",
    });
    setReviews(reviews.filter((review) => review.id !== id)); // Update state after deletion
  };

  // Edit an existing review by ID
  const editReview = async (id, updatedReview) => {
    await fetch(`https://crud-test-c836c-default-rtdb.firebaseio.com/reviews/${id}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    });
    setReviews(
      reviews.map((review) => (review.id === id ? { ...review, ...updatedReview } : review)) // Update state with edited review
    );
  };

  return (
    <div className="review-section">
      <h2>Reviews</h2>
      <ReviewInput onAddReview={addReview} /> {/* Input form for adding new reviews */}
      <div className="review-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} onDelete={deleteReview} onEdit={editReview} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
