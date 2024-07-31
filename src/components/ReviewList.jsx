// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Add this line to inspect the data
                if (data && Array.isArray(data)) {
                    setBooks(data);
                } else {
                    console.error('Invalid data format:', data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!books.length) {
        return <div>No books available</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Book List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map(book => (
                    <li key={book.title} className="border p-4 rounded-lg shadow-lg">
                        <Link to={`/book/${encodeURIComponent(book.title)}`}>
                            <img
                                src={`/src/assets/images/${book.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`}
                                alt={book.title}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h2 className="text-xl font-bold">{book.title}</h2>
                            <p className="text-gray-700">by {book.author}</p>
                            <p className="text-yellow-500">
                                {book.reviews.length ? (
                                    <span>
                    {book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length} stars
                  </span>
                                ) : (
                                    <span>No reviews yet</span>
                                )}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
