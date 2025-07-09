import React from 'react';
import { useCompare } from '../context/CompareContext';
import { loadImage } from '../utils/imageLoader';

const ComparePage = () => {
    const { compareItems, removeProductFromCompare } = useCompare();

    if (compareItems.length === 0) {
        return (
            <div>
                <h1 className="page-title">Compare Products</h1>
                <p>You have not added any products to compare. Please add products from the product list pages.</p>
            </div>
        );
    }

    // --- Generate the master list of all unique specification keys ---
    const allSpecKeys = new Set();
    compareItems.forEach(item => {
        Object.keys(item.specifications).forEach(key => {
            allSpecKeys.add(key);
        });
    });
    const specKeys = Array.from(allSpecKeys).sort();
    // ---

    const renderSpecificationValue = (value) => {
        if (value === undefined || value === null) return 'N/A';
        if (Array.isArray(value)) return value.join(' / ');
        if (typeof value === 'object') return Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ');
        return value.toString();
    };

    return (
        <div className="compare-page-container">
            <h1 className="page-title">Compare Products</h1>
            <div className="compare-table-wrapper">
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th className="spec-header">Feature</th>
                            {compareItems.map(item => (
                                <th key={item.id}>
                                    <div className="compare-product-header">
                                        <img src={loadImage(item.image)} alt={item.model} />
                                        <h3>{item.model}</h3>
                                        <p>{item.name}</p>
                                        <button onClick={() => removeProductFromCompare(item.id)} className="remove-item-btn">
                                            &times; Remove
                                        </button>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {specKeys.map(key => (
                            <tr key={key}>
                                <td><strong>{key}</strong></td>
                                {compareItems.map(item => (
                                    <td key={item.id}>
                                        {renderSpecificationValue(item.specifications[key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparePage;
