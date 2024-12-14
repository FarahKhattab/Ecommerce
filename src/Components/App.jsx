// App.jsx
import React from "react";
import Navbar from './Navbar.jsx';
import ProductsContainer from "./ProductsContainer.jsx";
import FilterBar from "./FilterBar.jsx";
import './App.css'; 

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <div className="filter-container">
                    <FilterBar />
                </div>
                <div className="products-container">
                    <ProductsContainer />
                </div>
            </div>
        </div>
    );
};

export default App;
