// FilterBar.jsx
import { useEffect, useState } from "react";
import './FilterBar.css'; 

const FilterBar = ({ filterProp, onColorSelected, onBrandSelected, onPriceChange}) => {
  const [colors, setColors] = useState([]);
  const [brands, setBrands]  = useState([]);
  const [price, setPrice] = useState([0, 1000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handlePriceChange = (e) => {
    const newPrice = [...price];
    newPrice[e.target.name === 'min' ? 0 : 1] = e.target.value;
    console.log('new price:', newPrice);
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
    onColorSelected(selectedColors);
    onBrandSelected(selectedBrands);
    onPriceChange(price);
    console.log('Price Range:', price);
    console.log('Selected Colors:', selectedColors);
    console.log('Selected Brands:', selectedBrands);
    };

  useEffect(() => {
    if (filterProp.colors.length > 0)
    {
      setColors(filterProp.colors)
    }
    if (filterProp.brands.length > 0)
    {
      setBrands(filterProp.brands)
    }
  console.log('filterProp:', filterProp);  
}, [filterProp]);
  
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
        

      <div className="filter-card">
        <h3>Filter By Color</h3>
        <div className="colors">

          {colors.length > 0 && 
            colors.map((color, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                {color}
              </label>
            ))
          }
          
        </div>
      </div>

      <div className="filter-card">
        <h3>Filter By Brand</h3>
        <div className="brands">
           {brands.length > 0 && 
            brands.map((brand, index) => (
            <label key={index}>
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
        <button className="filter-button" onClick={handleSubmit}>Filter</button>
      </div>
    </div>
  );
};

export default FilterBar;
