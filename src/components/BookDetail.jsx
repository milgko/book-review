// src/components/BookDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';

const BookDetail = () => {
    const { title } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                if (data && Array.isArray(data)) {
                    const foundBook = data.find(book => book.title.toLowerCase() === title.toLowerCase());
                    if (foundBook) {
                        setBook(foundBook);
                        
                        const storedReviews = JSON.parse(localStorage.getItem(foundBook.title)) || [];
                        
                        const allReviews = [...foundBook.reviews, ...storedReviews];
                        setReviews(allReviews);
                    } else {
                        console.error('Book not found:', title);
                    }
                } else {
                    console.error('Invalid data format:', data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
                setLoading(false);
            });
    }, [title]);

    const handleReviewSubmitted = () => {
        if (book) {
            const storedReviews = JSON.parse(localStorage.getItem(book.title)) || [];
            
            const allReviews = [...book.reviews, ...storedReviews];
            setReviews(allReviews);
        }
    };

    if (loading) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    if (!book) {
        return <div className="text-center text-xl">Book not found</div>;
    }

    
    const imagePath = `/src/assets/images/${book.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                <div className="w-full md:w-1/2 mb-4">
                    <img
                        src={imagePath}
                        alt={book.title}
                        onError={(e) => { e.target.src = '/src/assets/images/placeholder.jpg'; }} 
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
                <p className="text-gray-700 text-lg mb-2">Author: {book.author}</p>
                <p className="text-gray-700 text-lg mb-2">Genre: {book.genre}</p>
                <p className="text-gray-700 text-lg mb-2">Summary: {book.summary}</p>
                <p className="text-gray-700 text-lg mb-4">Release Date: {book.release_date}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Reviews:</h2>
                {reviews.length ? (
                    reviews.map((review, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
                            <p className="text-gray-700 font-semibold"><strong>{review.user}</strong>:</p>
                            <StarRating rating={review.rating} />
                            <p className="text-gray-700 mt-2">{review.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet</p>
                )}
                <ReviewForm bookTitle={book.title} onReviewSubmitted={handleReviewSubmitted} />
            </div>
        </div>
    );
};

export default BookDetail;





