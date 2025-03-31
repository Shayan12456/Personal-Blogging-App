import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import CategoriesPage from './pages/Categories';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="min-h-screen text-[grey]"
        style={{
          background: 'linear-gradient(to bottom, black, #2d2d2d, #d1d5db, rgb(62, 67, 74))',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogPage />} /> {/* Individual blog */}
          <Route path="/categories" element={<CategoriesPage />} /> {/* Individual blog */}
          <Route path="*" element={<div className="mt-[20vh] my-auto mx-auto text-[100px] text-center text-white py-20">404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
