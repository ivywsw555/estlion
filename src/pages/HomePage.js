import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { loadImage } from '../utils/imageLoader';
import AddToCompareButton from '../components/AddToCompareButton';
import './HomePage.css'; // We will create this CSS file next

// --- Data for the page ---
const allProducts = Object.values(productsData).flat();
const popularProducts = allProducts.slice(0, 3); // Get first 4 products as "popular"
const promotionProducts = allProducts.slice(6, 8); // Get next 4 as "promotion"

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* --- Hero Section --- */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Your Source for Reliable Power</h1>
                    <p>High-quality engines, generators, and tools for every need.</p>
                    <Link to="/products" className="hero-cta-button">View All Products</Link>
                </div>
            </section>

            {/* --- Popular Products Section --- */}
            <section className="product-showcase">
                <h2 className="section-title">Popular Products</h2>
                <div className="product-grid">
                    {popularProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <Link to={`/products/${product.id}`}>
                                {product.type.second && <span className="product-series">{product.type.second}</span>}
                                <img src={loadImage(product.image)} alt={product.name} />
                                <h3>{product.model}</h3>
                                <p>{product.name}</p>
                            </Link>
                            <AddToCompareButton product={product} />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Promotion Section --- */}
            <section className="product-showcase promotion-section">
                <h2 className="section-title">Our Promotions</h2>
                <div className="product-grid">
                     {promotionProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <Link to={`/products/${product.id}`}>
                                {product.type.second && <span className="product-series">{product.type.second}</span>}
                                <img src={loadImage(product.image)} alt={product.name} />
                                <h3>{product.model}</h3>
                                <p>{product.name}</p>
                            </Link>
                            <AddToCompareButton product={product} />
                        </div>
                    ))}
                </div>
            </section>
            
            {/* --- Company Info Section --- */}
            <section className="company-info-section">
                <div className="info-box">
                    <h3>Company Events</h3>
                    <ul>
                        <li><Link to="/news">Good news! Full container order for EDE6500T/T3...</Link></li>
                        <li><Link to="/news">Company celebrates its customers from the 120th country.</Link></li>
                    </ul>
                    <Link to="/news" className="more-link">More News &raquo;</Link>
                </div>
                <div className="info-box">
                    <h3>Why Choose Estlion?</h3>
                    <div className="why-choose-us">
                        <span>✓ Global Certified</span>
                        <span>✓ High Quality</span>
                        <span>✓ Reliable Service</span>
                        <span>✓ Humanistic Design</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
