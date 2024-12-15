import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import Navbar from './Navbar.jsx';
import ProductsContainer from "./ProductsContainer.jsx";
import FilterBar from "./FilterBar.jsx";
import SearchBar from "./SearchBar.jsx";
import './App.css'; 

const App = () => {
    const [products, setProducts] = useState([]);
    const [filterProp, setFilterProp] = useState({
    colors: [],
    brands: []
    });
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedBrand, setselectedBrand] = useState([]);

    const [price, setPrice] = useState([0, 1000]);
    // const [maxPrice, setMaxPrice] = useState(0);



    const handleSearchChange = (input) => {
        setSearchInput(input);
    };

    const handleColorFilter = (input) => {
        setSelectedColor(input);
    };
    const handleBrandFilter = (input) => {
        setselectedBrand(input);
    };

    const handlePriceFilter = (input) => {
        setPrice(input);
    };

    console.log('from App Selected Colors:', selectedColor);
    console.log('from App Selected Brands:', selectedBrand);
    console.log('from App Selected price:', price);


    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchInput.toLowerCase());
        const matchesColor = selectedColor.length > 0 ? selectedColor.includes(product.colour) : true;
        const matchesBrand = selectedBrand.length > 0 ? selectedBrand.includes(product.brandName) : true;

        const matchesPrice =
            (price[0] === "" || product.price.current.value >= price[0]) && 
            (price[1] === "" || product.price.current.value <= price[1]);

        return matchesSearch && matchesColor && matchesBrand && matchesPrice;
  });

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://asos2.p.rapidapi.com/products/v2/list',
                params: {
                    store: 'US',
                    offset: '0',
                    categoryId: '4209',
                    country: 'US',
                    sort: 'freshness',
                    currency: 'USD',
                    sizeSchema: 'US',
                    limit: '48',
                    lang: 'en-US',
                },
                headers: {
                    'x-rapidapi-key': 'faee72e900msh412cd07b017b061p1849f7jsnc14a9fcbb6e5',
                    'x-rapidapi-host': 'asos2.p.rapidapi.com',
                },
            };

            try {
                
                const response = await axios.request(options);
                    // Extract only the desired fields
                const transformedProducts = response.data.products.map((product) => ({
                name: product.name,
                additionalImageUrls: product.additionalImageUrls,
                colour: product.colour,
                brandName: product.brandName,
                imageUrl: 'https://'+product.imageUrl,
                price: {
                    current: product.price.current,
                    previous: product.price.previous,
                },
            }));
                setProducts(transformedProducts);

                    // Get unique colors and brands
                const uniqueColors = [...new Set(response.data.products.map((product) => product.colour))];
                const uniqueBrands = [...new Set(response.data.products.map((product) => product.brandName))];

                // Update states
                setProducts(transformedProducts);
                setFilterProp({
                    colors: uniqueColors,
                    brands: uniqueBrands,
                });

                const max_price = Math.max(
                ...response.data.products.map((product) => product.price.current.value)
                );
                const newPrice = [...price];
                newPrice[1]=max_price
                setPrice(newPrice);
                

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
        useEffect(() => {
        console.log('Products updated:', products);
        }, [products]); 
    
    useEffect(() => {
        console.log('filteredProducts updated:', filteredProducts);
        }, [filteredProducts]); 
    
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <div className="filter-container">
                    <FilterBar filterProp={filterProp} onColorSelected={handleColorFilter}
                        onBrandSelected={handleBrandFilter} onPriceChange={handlePriceFilter} />
                </div>
                <div className="products-container">
                    <SearchBar onSearchChange={handleSearchChange}/>
                    <ProductsContainer products={filteredProducts} loading={loading} error={error} />
                </div>
            </div>
        </div>
    );
};

export default App;
