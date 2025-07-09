import React from 'react';
import { NavLink } from 'react-router-dom';
import productsData from '../data/products.json';

// --- Process data to build the navigation structure ---
const allProducts = Object.values(productsData).flat();

const navStructure = allProducts.reduce((acc, product) => {
  const { first, second } = product.type;
  if (!first || !second) return acc;

  if (!acc[first]) {
    acc[first] = new Set();
  }
  acc[first].add(second);
  return acc;
}, {});

Object.keys(navStructure).forEach(key => {
  navStructure[key] = Array.from(navStructure[key]).sort();
});
// --- End of data processing ---

const Sidebar = ({ isOpen, onLinkClick }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
      <nav>
        {/* Main page links */}
        <ul className="sidebar-nav">
          <li><NavLink to="/about" onClick={onLinkClick}>ABOUT US</NavLink></li>
          <li><NavLink to="/news" onClick={onLinkClick}>COMPANY NEWS</NavLink></li>
        </ul>

        {/* Product Navigation */}
        <div className="product-nav">
          <h2 className="product-nav-title">
            <NavLink to="/products" onClick={onLinkClick}>ALL PRODUCTS</NavLink>
          </h2>
          {Object.entries(navStructure).map(([category, subcategories]) => (
            <div key={category} className="product-nav-group">
              <h3 className="product-nav-category">
                <NavLink to={`/products?category=${encodeURIComponent(category)}`} onClick={onLinkClick}>
                  {category}
                </NavLink>
              </h3>
              <ul className="product-nav-list">
                {subcategories.map(subcategory => (
                  <li key={subcategory}>
                    <NavLink to={`/products?category=${encodeURIComponent(category)}&series=${encodeURIComponent(subcategory)}`} onClick={onLinkClick}>
                      {subcategory}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

         {/* Other page links */}
         <ul className="sidebar-nav sidebar-footer-nav">
          <li><NavLink to="/contact" onClick={onLinkClick}>CONTACT US</NavLink></li>
          {/* <li><NavLink to="/login" onClick={onLinkClick}>LOG IN</NavLink></li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
