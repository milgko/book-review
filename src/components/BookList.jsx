// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
import '../index.css';
import StarRating from './StarRating';
import BookSearch from './BookSearch';


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredBook, setHoveredBook] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/779d97ded1f52a505689')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
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
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!books.length) {
    return <div className="text-center text-xl">No books available</div>;
  }

  return (
    <div className="p-6">
      <BookSearch />
      <h1 className="text-4xl font-bold mb-8">Book List:</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map(book => {
          const imagePath = `/src/assets/images/${book.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`;
          return (
            <li
              key={book.title}
              className="relative w-full h-80 perspective transition-transform duration-500 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredBook(book.title)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <Link to={`/book/${encodeURIComponent(book.title)}`} className="block w-full h-full">
                <div
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${hoveredBook === book.title ? 'flip' : ''}`}
                >
                  <div className="absolute inset-0 w-full h-full backface-hidden border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={imagePath}
                      alt={book.title}
                      onError={(e) => { e.target.src = '/src/assets/images/placeholder.jpg'; }} // Fallback image
                      className="w-full h-full object-contain shadow-[#fff]"
                    />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-[#ffa8b5] text-black p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">{book.title}</h2>
                    <p className="text-gray-900">by {book.author}</p>
                    <div className="text-[#ffd000]">
                      {book.reviews.length ? (
                        <StarRating rating={book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length} />
                      ) : (
                        <span>No reviews yet</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;

