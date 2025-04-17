// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import Details from './pages/Details';
import Details2 from './pages/Details2';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/contact'; // or ./pages/Contact if the file is actually named that






const samplePosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'An introduction to React Hooks...',
    content: 'Full content of the post goes here...',
  },
  {
    id: 2,
    title: 'Styling in React',
    excerpt: 'Different ways to style React components...',
    content: 'Full content of the post goes here...',
  },
];

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/blog/:id" element={<BlogPost posts={samplePosts} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Details2" element={<Details2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



