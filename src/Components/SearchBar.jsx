import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearchChange }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    onSearchChange(value); // Pass the input to the parent component
  };

  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
