import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* 这里可以继续添加其他页面的路由 */}
            </Routes>
        </Router>
    );
}

export default App;
