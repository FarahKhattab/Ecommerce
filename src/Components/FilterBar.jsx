// FilterBar.jsx
import React, { useState } from 'react';
import './FilterBar.css'; // Import the CSS file

const FilterBar = () => {
  const [price, setPrice] = useState([0, 1000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handlePriceChange = (e) => {
    const newPrice = [...price];
    newPrice[e.target.name === 'min' ? 0 : 1] = e.target.value;
    setPrice(newPrice);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handleSubmit = () => {
    console.log('Price Range:', price);
    console.log('Selected Colors:', selectedColors);
    console.log('Selected Brands:', selectedBrands);
    };
     const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://asos2.p.rapidapi.com/products/v2/list',
    //             params: {
    //                 store: 'US',
    //                 offset: '0',
    //                 categoryId: '4209',
    //                 country: 'US',
    //                 sort: 'freshness',
    //                 currency: 'USD',
    //                 sizeSchema: 'US',
    //                 limit: '48',
    //                 lang: 'en-US',
    //             },
    //             headers: {
    //                 'x-rapidapi-key': 'faee72e900msh412cd07b017b061p1849f7jsnc14a9fcbb6e5',
    //                 'x-rapidapi-host': 'asos2.p.rapidapi.com',
    //             },
    //         };

    //         try {
                
    //             const response = await axios.request(options);
    //              // Extract only the desired fields
    //             const transformedProducts = response.data.products.map((product) => ({
    //             name: product.name,
    //             additionalImageUrls: product.additionalImageUrls,
    //             colour: product.colour,
    //             brandName: product.brandName,
    //             imageUrl: 'https://'+product.imageUrl,
    //             price: {
    //                 current: product.price.current,
    //                 previous: product.price.previous,
    //             },
    //         }));
    //             setProducts(transformedProducts);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);





  return (
    <div className="filter-bar">
      <div className="filter-card">
        <h3>Filter By Price</h3>
        <div className="price-range">
          <input
            type="number"
            name="min"
            value={price[0]}
            onChange={handlePriceChange}
            min="0"
          />
          <span>to</span>
          <input
            type="number"
            name="max"
            value={price[1]}
            onChange={handlePriceChange}
            max="10000"
          />
        </div>
        <button onClick={handleSubmit}>Filter</button>
      </div>

      <div className="filter-card">
        <h3>Filter By Color</h3>
        <div className="colors">
          {['Blue', 'Green', 'Orange', 'Dark Blue'].map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-card">
        <h3>Filter By Brand</h3>
        <div className="brands">
          {['Nike', 'Asos', 'Timberland', 'Pull&Bear'].map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
