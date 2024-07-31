// src/components/Root.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import BookList from "./components/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";
import GenreBooks from "./components/GenreBooks.jsx";
import './App.css';

function Root() {
    const routes = [
        { path: '/', name: 'Home', Component: BookList },
        { path: '/book/:title', name: 'BookDetail', Component: BookDetail },
        { path: '/genre/:genre', name: 'GenreBooks', Component: GenreBooks},
        
    ];

    return (
        <Router>
            <div className="book-app-container h-screen flex">
                <SideBar />
                <div className="content flex-grow p-4 overflow-y-auto">
                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Root;
