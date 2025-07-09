import React from 'react';
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';

const CompareBubble = () => {
    const { compareItems } = useCompare();

    // Don't render the bubble if there are no items to compare
    if (compareItems.length === 0) {
        return null;
    }

    return (
        <Link to="/compare" className="compare-bubble">
            <span className="compare-bubble-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </span>
            <span className="compare-bubble-count">{compareItems.length}</span>
        </Link>
    );
};

export default CompareBubble;
