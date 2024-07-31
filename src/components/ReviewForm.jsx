import React, { useState } from 'react';

const ReviewForm = ({ bookTitle }) => {
    const [name, setName] = useState('');
    const [stars, setStars] = useState(0);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, stars, text };
        // Here you would typically send the review to the server
        console.log('New Review for book', bookTitle, newReview);
        // Reset the form
        setName('');
        setStars(0);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Stars:</label>
                <input type="number" value={stars} onChange={(e) => setStars(parseInt(e.target.value))} required min="0" max="5" />
            </div>
            <div>
                <label>Review:</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;
