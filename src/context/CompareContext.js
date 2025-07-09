import React, { createContext, useState, useContext, useEffect } from 'react';

const CompareContext = createContext();

export const useCompare = () => useContext(CompareContext);

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareItems] = useState([]);

    // Load compare items from localStorage on initial render
    useEffect(() => {
        const storedItems = localStorage.getItem('compareItems');
        if (storedItems) {
            setCompareItems(JSON.parse(storedItems));
        }
    }, []);

    // Save compare items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('compareItems', JSON.stringify(compareItems));
    }, [compareItems]);

    const addProductToCompare = (product) => {
        if (compareItems.length >= 4) {
            alert("You can compare a maximum of 4 products.");
            return;
        }
        if (!compareItems.find(item => item.id === product.id)) {
            setCompareItems(prevItems => [...prevItems, product]);
        }
    };

    const removeProductFromCompare = (productId) => {
        setCompareItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCompareList = () => {
        setCompareItems([]);
    };

    const value = {
        compareItems,
        addProductToCompare,
        removeProductFromCompare,
        clearCompareList,
    };

    return (
        <CompareContext.Provider value={value}>
            {children}
        </CompareContext.Provider>
    );
};
