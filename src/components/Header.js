import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/LOGO.jpg';

const Header = ({ onMenuClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the search results page only if there's a search term
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    // Allow searching by pressing the Enter key
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header">
      {/* Hamburger Menu Icon for Mobile */}
      <button className="mobile-nav-toggle" onClick={onMenuClick}>
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="15" rx="8"></rect>
          <rect y="30" width="100" height="15" rx="8"></rect>
          <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
      </button>

      <Link to="/" className="header-logo">
        <img src={logo} alt="ESTLION Logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="header-nav">
        <div className="search-products">
          <label>SEARCH PRODUCTS: </label>
          <input
            type="text"
            placeholder="Enter model or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={handleSearch}>GO</button>
        </div>
        <div className="top-links">
          <Link to="/">HOME</Link>|
          <a href="mailto:estlion@qq.com">EMAIL</a>|
          <a href="#/">CHINESE</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
