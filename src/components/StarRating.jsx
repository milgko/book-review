// src/components/StarRating.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange }) => {
    const handleClick = (newRating) => {
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                    key={star}
                    className={`cursor-pointer ${rating >= star ? 'text-gray-950' : 'text-gray-300'}`}
                    onClick={() => handleClick(star)}
                />
            ))}
        </div>
    );
};

export default StarRating;





