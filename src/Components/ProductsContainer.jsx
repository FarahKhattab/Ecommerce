import axios from 'axios';
import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import "./ProductsContainer.css";

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
}, [products]); // This will run whenever the `products` state changes


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="products-grid">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

        </div>
    );
};

export default ProductsContainer;
