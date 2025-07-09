import React from 'react';
import AddToCompareButton from '../components/AddToCompareButton'; // Import the button
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { loadImage } from '../utils/imageLoader'; // Import the new loader
const allProducts = Object.values(productsData).flat();

const ProductDetail = () => {
  const { productId } = useParams();
  const product = allProducts.find(p => p.id === parseInt(productId));

  // Helper function to render different types of specification values
  const renderSpecificationValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(' / ');
    }
    if (typeof value === 'object' && value !== null) {
      return Object.entries(value).map(([key, val]) => `${key}: ${val}`).join(', ');
    }
    return value.toString();
  };

  if (!product) {
    return (
      <div>
        <h2>Product not found!</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
        <h1 className="page-title">{product.name} - {product.model}</h1>
          <div className="product-detail-container">
            <div className="product-image-gallery">
                <img
                    src={loadImage(product.image)}
                    alt={product.name}
                />
            </div>
            <div className="product-specs">
                <h2>Specifications</h2>
                <table className="specs-table">
                    <tbody>
                         {Object.entries(product.specifications).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{renderSpecificationValue(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
              <AddToCompareButton product={product} /> {/* Add this line */}
          </div>
    </div>
  );
};

export default ProductDetail;