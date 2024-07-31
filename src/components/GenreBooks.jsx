import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GenreBooks = () => {
    const { genre } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); // Add this line
                if (data && Array.isArray(data)) {
                    const genreBooks = data.filter(book => book.genre === decodeURIComponent(genre));
                    console.log('Filtered books:', genreBooks); // Add this line
                    setBooks(genreBooks);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setLoading(false);
            });
    }, [genre]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!books.length) {
        return <div>No books available in this genre</div>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold m-6">Books in {decodeURIComponent(genre)} Genre:</h1>
            <ul>
                {books.map(book => (
                    <li
                        className="ml-6 mb-4"
                        key={book.title}>
                        <Link to={`/book/${encodeURIComponent(book.title)}`}>
                            {book.title} by {book.author} - {book.reviews.length ? book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length : 0} stars
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreBooks;
