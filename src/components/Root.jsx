import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import App from "./App.jsx";

function Root() {
    const routes = [
        {path: '/', name: 'Home', Component: App},
        // {path: '/', name: 'About', Component: About},
        // {path: '/contact', name: 'Contact', Component: Contact},
        // {path: '/blog', name: 'Blog', Component: Blog},
        // {path: '/blog/:id', name: 'BlogPost', Component: BlogPost},
        // {path: '*', name: 'NoMatch', Component: NoMatch},
    ]
    return (
        <Router>
            <div className="book-app-container">
                
                <div className="content">
                    <Routes>
                        {routes.map(({path, Component}) => (
                            <Route key={path}
                                   path={path}
                                   element={<Component />} />
                        ))}
                        {/*<Route path="/" element={ <App /> } />*/}
                        {/*<Route path="/about" element={ <About /> } />*/}
                        {/*<Route path="/contact" element={ <Contact /> } />*/}
                        {/*<Route path="/blog" element={ <Blog /> } />*/}
                        {/*<Route path="/blog/:id" element={ <BlogPost />} />*/}
                        {/*<Route path="*" element={ <NoMatch />} />*/}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default Root;