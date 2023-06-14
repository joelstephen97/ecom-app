import React from 'react';
import Homepage from './Pages/homepage.js'
import Shop from './Pages/shop.js'
import About from './Pages/about.js'
import FAQ from './Pages/faq.js'
import Blog from './Pages/blog.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';




const App = () => (
  <Router>
    <div className="route-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  </Router>
);

export default App;