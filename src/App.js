import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompareProvider } from './context/CompareContext';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CompareBubble from './components/CompareBubble';

import HomePage from './pages/HomePage'; // Import the new Home page
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/Search';
import ComparePage from './pages/Compare';

import './App.css';

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <CompareProvider>
      <Router>
        <div className="app-container">
          <Header onMenuClick={toggleMobileNav} />
          <div
            className={`nav-overlay ${isMobileNavOpen ? 'active' : ''}`}
            onClick={closeMobileNav}
          ></div>
          <div className="main-content">
            <Sidebar isOpen={isMobileNavOpen} onLinkClick={closeMobileNav} />
            <main className="content-area">
              <Routes>
                <Route path="/" element={<HomePage />} /> {/* Set HomePage as the default */}
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
          <Footer />
          <CompareBubble />
        </div>
      </Router>
    </CompareProvider>
  );
}

export default App;
