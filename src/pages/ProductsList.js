import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { loadImage } from '../utils/imageLoader';
import banner from '../assets/images/p.jpg';
import AddToCompareButton from '../components/AddToCompareButton'; // Import the button

// --- Data Processing ---
const allProducts = Object.values(productsData).flat();
const categories = ['All', ...new Set(allProducts.map(p => p.type.first))];
const series = ['All', ...new Set(allProducts.map(p => p.type.second).filter(Boolean))];

// --- Filter Modal Component ---
const FilterModal = ({ initialFilters, onApply, onClose }) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  return (
    <div className="filter-modal-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-modal-header">
          <h2>Filter Products</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="filter-modal-body">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select id="category-filter" onChange={(e) => handleFilterChange('category', e.target.value)} value={filters.category}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="series-filter">Series:</label>
            <select id="series-filter" onChange={(e) => handleFilterChange('series', e.target.value)} value={filters.series}>
              {series.map(ser => <option key={ser} value={ser}>{ser}</option>)}
            </select>
          </div>
          <button className="mobile-filter-trigger" onClick={() => onApply(filters)}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
};


const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  // Read filters from URL
  const categoryFilter = searchParams.get('category') || 'All';
  const seriesFilter = searchParams.get('series') || 'All';

  // Filter products based on URL params
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = categoryFilter === 'All' || product.type.first === categoryFilter;
    const seriesMatch = seriesFilter === 'All' || product.type.second === seriesFilter;
    return categoryMatch && seriesMatch;
  });

  const handleApplyFilters = (newFilters) => {
    const params = {};
    if (newFilters.category !== 'All') params.category = newFilters.category;
    if (newFilters.series !== 'All') params.series = newFilters.series;
    setSearchParams(params);
    setFilterModalOpen(false);
  };

  const pageTitle = seriesFilter !== 'All' ? seriesFilter : (categoryFilter !== 'All' ? categoryFilter : 'Our Products');

  return (
    <div>
      <img src={banner} alt="Products Banner" className="page-banner" />
      <h1 className="page-title">{pageTitle}</h1>
      
      {isFilterModalOpen && (
        <FilterModal 
          initialFilters={{ category: categoryFilter, series: seriesFilter }}
          onApply={handleApplyFilters}
          onClose={() => setFilterModalOpen(false)}
        />
      )}

      <button className="mobile-filter-trigger" onClick={() => setFilterModalOpen(true)}>
        Filter Products
      </button>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
           <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
                {product.type.second && <span className="product-series">{product.type.second}</span>}
                <img src={loadImage(product.image)} alt={product.name} />
                <h3>{product.model}</h3>
                <p>{product.name}</p>
            </Link>
            <AddToCompareButton product={product} /> {/* Add this line */}
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
