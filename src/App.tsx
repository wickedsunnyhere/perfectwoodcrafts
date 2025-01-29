import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NewsletterSignup from './components/NewsletterSignup';
import PlansPage from './pages/PlansPage';
import ToolsPage from './pages/ToolsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Title updater component
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Perfect Wood Crafts';

    switch (path) {
      case '/':
        title = 'Home | Perfect Wood Crafts';
        break;
      case '/plans':
        title = 'Woodworking Plans | Perfect Wood Crafts';
        break;
      case '/tools':
        title = 'Shop Tools | Perfect Wood Crafts';
        break;
      case '/blog':
        title = 'Blog | Perfect Wood Crafts';
        break;
      case '/about':
        title = 'About Us | Perfect Wood Crafts';
        break;
      case '/contact':
        title = 'Contact Us | Perfect Wood Crafts';
        break;
    }

    document.title = title;
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <NewsletterSignup />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TitleUpdater />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}