// src/components/SideBar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import litcrit from '../assets/litcrit.jpg';

// Import icons
import adventureIcon from '../assets/icons/adveture_icon.jpeg';
import dystopianIcon from '../assets/icons/dystopian_icon.jpeg';
import fictionIcon from '../assets/icons/fiction_icon.jpeg';
import hystoricalIcon from '../assets/icons/hystorical_icon.jpeg';
import romanceIcon from '../assets/icons/romance_icon.jpeg';
import tragedyIcon from '../assets/icons/tragedy_icon.jpeg';
import literayIcon from '../assets/icons/literary_icon.jpeg';
import psychologicalIcon from '../assets/icons/psychological_icon.jpeg';
import fantasyIcon from '../assets/icons/fiction_icon.jpeg';



const genreIcons = {
    'Fiction': fictionIcon,
    'Dystopian': dystopianIcon,
    'Romance': romanceIcon,
    'Tragedy': tragedyIcon,
    'Adventure': adventureIcon,
    'Historical': hystoricalIcon,
    'Psychological Fiction': psychologicalIcon,
    'Literary Fiction': literayIcon,
    'Fantasy': fantasyIcon,

};

const SideBar = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data)) {
                    const allGenres = data.reduce((acc, book) => {
                        if (book.genre && !acc.includes(book.genre)) {
                            acc.push(book.genre);
                        }
                        return acc;
                    }, []);
                    setGenres(allGenres);
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    return (
        <aside className="w-64 h-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
            <div className="p-4">
                <Link to="/" className="block mb-5">
                    <img src={litcrit} className="h-14 w-full" alt="Logo" />
                </Link>
                <ul className="space-y-2 font-medium">
                    {genres.map(genre => (
                        <li key={genre}>
                            <Link
                                to={`/genre/${encodeURIComponent(genre)}`}
                                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src={genreIcons[genre] || fictionIcon} // Fallback icon if genre is not found
                                    className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    alt={`${genre} icon`}
                                />
                                <span className="ml-3">{genre}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;