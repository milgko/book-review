// src/components/BookDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { title } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                if (data && Array.isArray(data)) {
                    const foundBook = data.find(book => book.title.toLowerCase() === title.toLowerCase());
                    if (foundBook) {
                        setBook(foundBook);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Genre: {book.genre}</p>
            <p className="text-gray-700">Summary: {book.summary}</p>
            <p className="text-gray-700">Release Date: {book.release_date}</p>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Reviews:</h2>
                {book.reviews.map((review, index) => (
                    <div key={index} className="mb-2 p-2 border rounded">
                        <p className="text-gray-700"><strong>{review.user}</strong>: {review.comment}</p>
                        <p className="text-yellow-500">{review.rating} stars</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookDetail;
