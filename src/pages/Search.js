import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { loadImage } from '../utils/imageLoader';

// Combine all products from different categories into a single array
const allProducts = Object.values(productsData).flat();

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Filter products based on the search query
  const filteredProducts = query ? allProducts.filter(product => {
    const searchTerm = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.model.toLowerCase().includes(searchTerm) ||
      product.type.first.toLowerCase().includes(searchTerm) ||
      (product.type.second && product.type.second.toLowerCase().includes(searchTerm))
    );
  }) : [];

  return (
    <div>
      <h1 className="page-title">Search Results for "{query}"</h1>
      
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                {product.type.second && <span className="product-series">{product.type.second}</span>}
                <img src={loadImage(product.image)} alt={product.name} />
                <h3>{product.model}</h3>
                <p>{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found matching your search term.</p>
      )}
    </div>
  );
};

export default SearchResults;
