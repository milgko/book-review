// src/components/ReviewForm.jsx
import React, { useState } from 'react';
import StarRating from './StarRating'; 

const ReviewForm = ({ bookTitle, onReviewSubmitted }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!name || rating <= 0 || !comment) {
            alert('Please fill out all fields.');
            return;
        }

        const review = {
            user: name,
            rating,
            comment,
        };

        const existingReviews = JSON.parse(localStorage.getItem(bookTitle)) || [];
        existingReviews.push(review);
        localStorage.setItem(bookTitle, JSON.stringify(existingReviews));

        setName('');
        setRating(0);
        setComment('');

        if (onReviewSubmitted) {
            onReviewSubmitted();
        }
    };

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rating:</label>
                    <StarRating
                        rating={rating}
                        onRatingChange={(newRating) => setRating(newRating)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Comment:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#ffa8b5] text-white px-4 py-2 rounded-lg"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;

