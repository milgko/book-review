import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import GenreBooks from './components/GenreBooks';
import './reset.css';
import './App.css';
import 'animate.css';

function App() {
    return (
        <Router>
            <div className="book-app-container">
                <SideBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/book/:title" element={<BookDetail />} />
                        <Route path="/genre/:genre" element={<GenreBooks />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
