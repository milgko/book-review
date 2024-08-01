import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://api.npoint.io/779d97ded1f52a505689')
            .then(response => response.json())
            .then(data => {
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
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredBooks([]);
            setDropdownOpen(false);
            return;
        }
        const lowerTerm = searchTerm.toLowerCase();
        const results = books.filter(book =>
            book.title.toLowerCase().includes(lowerTerm) ||
            book.author.toLowerCase().includes(lowerTerm)
        );
        setFilteredBooks(results);
        setDropdownOpen(true);
    }, [searchTerm, books]);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleDropdownClick = (title) => {
        setSearchTerm(title);
        setDropdownOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (filteredBooks.length > 0) {
            // Redirect or handle search result logic here
            // e.g., navigate to a search results page or show detailed view
            // For example: history.push(`/book/${encodeURIComponent(filteredBooks[0].title)}`);
        }
    };
    if (loading) {
        return <div className="text-center text-xl">Loading...</div>;
    }
    return (
        <div className="max-w-md relative">
            <form className="max-w-md mb-6" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#ffa8b5] focus:border-[#ffa8b5] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ffa8b5] dark:focus:border-[#ffa8b5]"
                        placeholder="Search by title or author"
                        required
                    />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#ffa8b5] hover:bg-[#ffa8b5] focus:ring-4 focus:outline-none focus:ring-[#ffa8b5] font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search
                    </button>
                </div>
                {dropdownOpen && filteredBooks.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
                        <ul>
                            {filteredBooks.map((book) => (
                                <li
                                    key={book.title}
                                    onClick={() => handleDropdownClick(book.title)}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    <Link to={`/book/${encodeURIComponent(book.title)}`}>
                                        {book.title} by {book.author}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    );
};
export default BookSearch;