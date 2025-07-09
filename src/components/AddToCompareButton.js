import React from 'react';
import { useCompare } from '../context/CompareContext';

const AddToCompareButton = ({ product }) => {
    const { compareItems, addProductToCompare, removeProductFromCompare } = useCompare();

    // --- FIX: Add a check to ensure 'product' exists ---
    // If the product prop is not passed, don't render the button.
    if (!product) {
        return null;
    }

    const isInCompare = compareItems.some(item => item.id === product.id);

    const handleClick = (e) => {
        // Prevent link navigation when clicking the button inside a Link component
        e.preventDefault(); 
        e.stopPropagation();

        if (isInCompare) {
            removeProductFromCompare(product.id);
        } else {
            addProductToCompare(product);
        }
    };

    return (
        <button onClick={handleClick} className={`add-to-compare-btn ${isInCompare ? 'in-compare' : ''}`}>
            {isInCompare ? '✓ In Compare' : '+ Compare'}
        </button>
    );
};

export default AddToCompareButton;
